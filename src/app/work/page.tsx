"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
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
import { Briefcase, Plus, PlayCircle, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { isDueToday, isOverdue } from "@/lib/utils";

export default function WorkPage() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("KANBAN");
  const [search, setSearch] = useState("");
  const [selectedPriority, setSelectedPriority] = useState<Priority | "ALL">("ALL");
  const [selectedTag, setSelectedTag] = useState<string | "ALL">("ALL");

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<TaskItem | null>(null);
  const [modalDefaultStatus, setModalDefaultStatus] = useState<TaskStatus>("TODO");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      if (res.success && res.tasks) {
        setTasks(res.tasks as TaskItem[]);
      }
    } catch {
      // Clean workspace
    } finally {
      setLoading(false);
    }
  };

  const allTags = useMemo(() => {
    const set = new Set<string>();
    tasks.forEach((t) => t.tags?.forEach((tag) => set.add(tag)));
    return Array.from(set);
  }, [tasks]);

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
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status: newStatus } : t))
    );
    try {
      await updateTaskStatus(id, newStatus);
    } catch {
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
      {/* Page Header Strip */}
      <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-neutral-900 dark:text-neutral-100" />
              <h1 className="font-mono text-lg font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">
                PROJECT WORKSPACE
              </h1>
            </div>
            <p className="font-mono text-sm text-neutral-500 mt-1">
              High-throughput task dispatch, milestone deadlines, and status tracking.
            </p>
          </div>

          {tasks.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono">
              <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
                <span className="text-xs text-neutral-500 block">TOTAL WORK</span>
                <span className="text-base font-bold text-neutral-900 dark:text-neutral-100">
                  {metrics.total}
                </span>
              </div>
              <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
                <span className="text-xs text-neutral-500 block">IN PROGRESS</span>
                <span className="text-base font-bold text-sky-600 dark:text-sky-400">
                  {metrics.inProgress}
                </span>
              </div>
              <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
                <span className="text-xs text-neutral-500 block">DUE TODAY</span>
                <span className="text-base font-bold text-amber-600 dark:text-amber-400">
                  {metrics.dueToday}
                </span>
              </div>
              <div className="border border-neutral-300 dark:border-[#262626] bg-neutral-50 dark:bg-[#0E0E0E] px-3 py-1.5">
                <span className="text-xs text-neutral-500 block">OVERDUE</span>
                <span className="text-base font-bold text-red-600 dark:text-red-400">
                  {metrics.overdue}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {tasks.length === 0 && !loading ? (
        /* Clean Inviting Empty State */
        <div className="border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-12 text-center max-w-2xl mx-auto space-y-6">
          <div className="inline-flex p-4 border border-neutral-300 dark:border-[#333333] bg-neutral-50 dark:bg-[#181818]">
            <Briefcase className="w-8 h-8 text-neutral-800 dark:text-neutral-200" />
          </div>
          <div className="space-y-2">
            <h2 className="font-mono text-xl font-bold uppercase tracking-wide text-neutral-900 dark:text-white">
              YOUR WORKSPACE IS CLEAN
            </h2>
            <p className="font-mono text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md mx-auto">
              No tasks currently registered in your personal workspace. Dispatch your first engineering item or explore the tutorial sandbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleOpenNewModal("TODO")}
              className="flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>CREATE FIRST TASK</span>
            </Button>
            <Link href="/demo">
              <Button
                variant="outline"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>EXPLORE DEMO & TUTORIAL</span>
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        /* Workspace Active View */
        <div className="space-y-6">
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
        </div>
      )}

      {/* Create / Edit Modal */}
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
