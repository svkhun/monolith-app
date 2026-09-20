"use client";

import React, { useState, useEffect, useMemo } from "react";
import { TaskItem, Priority, TaskStatus, ViewMode } from "@/types";
import { TaskKanban } from "@/components/work/TaskKanban";
import { TaskListView } from "@/components/work/TaskListView";
import { TaskFilters } from "@/components/work/TaskFilters";
import { TaskModal } from "@/components/work/TaskModal";
import {
  getTasks,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
} from "@/lib/actions/task-actions";
import { Briefcase, CheckCircle2, Clock, AlertTriangle } from "lucide-react";
import { isDueToday, isOverdue } from "@/lib/utils";

// Initial demo tasks if database has not yet been seeded
const INITIAL_DEMO_TASKS: TaskItem[] = [
  {
    id: "task_01",
    userId: "demo-user-id",
    title: "Implement Distributed Consensus Protocol (Raft)",
    description: "Write state machine replication, leader election, and log compaction routines.",
    priority: "URGENT",
    status: "IN_PROGRESS",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(), // Tomorrow
    tags: ["distributed-systems", "core", "golang"],
    orderIndex: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "task_02",
    userId: "demo-user-id",
    title: "Database Index Tuning & Query Optimization",
    description: "Add composite B-Tree indexes for user query predicates and evaluate EXPLAIN ANALYZE.",
    priority: "HIGH",
    status: "TODO",
    dueDate: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    tags: ["database", "postgres", "perf"],
    orderIndex: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "task_03",
    userId: "demo-user-id",
    title: "Setup CI/CD Pipeline & Automated Smoke Tests",
    description: "Create GitHub Actions workflow with matrix testing and container image tagging.",
    priority: "MEDIUM",
    status: "DONE",
    dueDate: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    tags: ["devops", "ci-cd"],
    orderIndex: 2,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "task_04",
    userId: "demo-user-id",
    title: "Audit Security Tokens & CSRF Protection",
    description: "Validate SameSite cookies, JWT signature verification and rate limiter middlewares.",
    priority: "URGENT",
    status: "TODO",
    dueDate: new Date().toISOString(), // Today
    tags: ["security", "auth"],
    orderIndex: 3,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export default function WorkPage() {
  const [tasks, setTasks] = useState<TaskItem[]>(INITIAL_DEMO_TASKS);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("KANBAN");
  const [search, setSearch] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<Priority | "ALL">("ALL");
  const [selectedTag, setSelectedTag] = useState<string | "ALL">("ALL");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskItem | null>(null);
  const [modalDefaultStatus, setModalDefaultStatus] = useState<TaskStatus>("TODO");

  // Load tasks from backend
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      if (res.success && res.tasks && res.tasks.length > 0) {
        setTasks(res.tasks as TaskItem[]);
      }
    } catch (e) {
      console.warn("Using local task dataset");
    } finally {
      setLoading(false);
    }
  };

  // Extract all unique tags
  const allTags = useMemo(() => {
    const set = new Set<string>();
    tasks.forEach((t) => t.tags?.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [tasks]);

  // Filter tasks based on search, priority, and tags
  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const matchesSearch =
        search === "" ||
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        (t.description && t.description.toLowerCase().includes(search.toLowerCase()));

      const matchesPriority =
        selectedPriority === "ALL" || t.priority === selectedPriority;

      const matchesTag =
        selectedTag === "ALL" || (t.tags && t.tags.includes(selectedTag));

      return matchesSearch && matchesPriority && matchesTag;
    });
  }, [tasks, search, selectedPriority, selectedTag]);

  // Summary Metrics
  const metrics = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter((t) => t.status === "DONE").length;
    const inProgress = tasks.filter((t) => t.status === "IN_PROGRESS").length;
    const overdue = tasks.filter(
      (t) => isOverdue(t.dueDate) && t.status !== "DONE"
    ).length;
    const dueToday = tasks.filter(
      (t) => isDueToday(t.dueDate) && t.status !== "DONE"
    ).length;

    return { total, completed, inProgress, overdue, dueToday };
  }, [tasks]);

  // Handlers
  const handleOpenNewModal = (defaultStatus: TaskStatus = "TODO") => {
    setEditingTask(null);
    setModalDefaultStatus(defaultStatus);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (task: TaskItem) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleStatusChange = async (id: string, newStatus: TaskStatus) => {
    // Optimistic update
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
    try {
      await updateTaskStatus(id, newStatus);
    } catch {
      // Revert if error
      loadTasks();
    }
  };

  const handleDeleteTask = async (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    try {
      await deleteTask(id);
    } catch {
      loadTasks();
    }
  };

  const handleModalSubmit = async (formData: {
    title: string;
    description?: string;
    priority: Priority;
    status: TaskStatus;
    dueDate?: string | null;
    tags: string[];
  }) => {
    if (editingTask) {
      // Update
      const res = await updateTask(editingTask.id, formData);
      if (res.success && res.task) {
        setTasks((prev) =>
          prev.map((t) =>
            t.id === editingTask.id
              ? {
                  ...t,
                  ...formData,
                  dueDate: formData.dueDate || null,
                }
              : t
          )
        );
      }
    } else {
      // Create
      const res = await createTask(formData);
      if (res.success && res.task) {
        const newTask: TaskItem = {
          id: res.task.id,
          userId: res.task.userId,
          title: res.task.title,
          description: res.task.description,
          priority: res.task.priority as Priority,
          status: res.task.status as TaskStatus,
          dueDate: res.task.dueDate ? res.task.dueDate.toISOString() : null,
          tags: res.task.tags || [],
          orderIndex: res.task.orderIndex,
          createdAt: res.task.createdAt.toISOString(),
          updatedAt: res.task.updatedAt.toISOString(),
        };
        setTasks((prev) => [newTask, ...prev]);
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header & High-density KPI Strip */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4 text-neutral-900 dark:text-neutral-100" />
              <h1 className="font-mono text-base font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                PROJECT WORKSPACE // DISPATCH CONSOLE
              </h1>
            </div>
            <p className="font-mono text-xs text-neutral-500 mt-1">
              High-throughput task management, milestone scheduling, and real-time execution tracking.
            </p>
          </div>

          {/* Metric Tiles */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
            <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
              <span className="text-[10px] text-neutral-500 block">TOTAL WORK</span>
              <span className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                {metrics.total}
              </span>
            </div>
            <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
              <span className="text-[10px] text-neutral-500 block">IN PROGRESS</span>
              <span className="text-sm font-bold text-sky-600 dark:text-sky-400">
                {metrics.inProgress}
              </span>
            </div>
            <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
              <span className="text-[10px] text-neutral-500 block">DUE TODAY</span>
              <span className="text-sm font-bold text-amber-600 dark:text-amber-400">
                {metrics.dueToday}
              </span>
            </div>
            <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
              <span className="text-[10px] text-neutral-500 block">OVERDUE</span>
              <span className="text-sm font-bold text-red-600 dark:text-red-400">
                {metrics.overdue}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <TaskFilters
        search={search}
        onSearchChange={setSearch}
        selectedPriority={selectedPriority}
        onPriorityChange={setSelectedPriority}
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        allTags={allTags}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        onOpenNewModal={() => handleOpenNewModal("TODO")}
      />

      {/* Main Board View */}
      {viewMode === "KANBAN" ? (
        <TaskKanban
          tasks={filteredTasks}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
          onAddNew={handleOpenNewModal}
        />
      ) : (
        <TaskListView
          tasks={filteredTasks}
          onEdit={handleOpenEditModal}
          onDelete={handleDeleteTask}
          onStatusChange={handleStatusChange}
        />
      )}

      {/* Create / Edit Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        task={editingTask}
        defaultStatus={modalDefaultStatus}
      />
    </div>
  );
}
