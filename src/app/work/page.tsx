"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { TaskItem, Priority, TaskStatus, ViewMode } from "@/types";
import { TaskKanban } from "@/components/work/TaskKanban";
import { TaskListView } from "@/components/work/TaskListView";
import { TaskFilters } from "@/components/work/TaskFilters";
import { TaskModal } from "@/components/work/TaskModal";
import { NotificationBanner } from "@/components/layout/NotificationBanner";
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
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function WorkPage() {
  const { t } = useLanguage();
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
    // 1. Instantly populate from local cache if available (0ms load!)
    try {
      const cached = localStorage.getItem("monolith_cached_tasks");
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTasks(parsed);
          setLoading(false);
        }
      }
    } catch {
      // Ignore parse error
    }

    // 2. Fetch fresh data in background
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const res = await getTasks();
      if (res.success && res.tasks) {
        setTasks(res.tasks as TaskItem[]);
        try {
          localStorage.setItem("monolith_cached_tasks", JSON.stringify(res.tasks));
        } catch {
          // Ignore quota error
        }
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
    <div className="space-y-6 animate-arch-in">
      {/* Page Header Strip */}
      <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#F3EDE4] dark:bg-[#201C18] p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-[#BD682C]" />
              <h1 className="font-mono text-lg font-bold uppercase tracking-widest text-[#26201A] dark:text-[#EFE8DC]">
                {t("work_title")}
              </h1>
            </div>
            <p className="font-mono text-sm text-[#786C60] dark:text-[#9C9082] mt-1">
              {t("work_subtitle")}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {tasks.length > 0 && (
              <div className="hidden sm:grid grid-cols-4 gap-2 font-mono">
                <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] px-2.5 py-1">
                  <span className="text-[10px] text-[#786C60] dark:text-[#9C9082] block">TOTAL</span>
                  <span className="text-sm font-bold text-[#26201A] dark:text-[#EFE8DC]">
                    {metrics.total}
                  </span>
                </div>
                <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] px-2.5 py-1">
                  <span className="text-[10px] text-[#786C60] dark:text-[#9C9082] block">ACTIVE</span>
                  <span className="text-sm font-bold text-[#BD682C]">
                    {metrics.inProgress}
                  </span>
                </div>
                <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] px-2.5 py-1">
                  <span className="text-[10px] text-[#786C60] dark:text-[#9C9082] block">TODAY</span>
                  <span className="text-sm font-bold text-[#D48B38]">
                    {metrics.dueToday}
                  </span>
                </div>
                <div className="border border-[#DDD4C5] dark:border-[#3B332B] bg-[#FBF8F3] dark:bg-[#161311] px-2.5 py-1">
                  <span className="text-[10px] text-[#786C60] dark:text-[#9C9082] block">OVERDUE</span>
                  <span className="text-sm font-bold text-[#B5432D]">
                    {metrics.overdue}
                  </span>
                </div>
              </div>
            )}
            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenNewModal("TODO")}
              className="flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>{t("work_btn_new")}</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Slim, Non-Intrusive Notification Banner if no tasks */}
      {tasks.length === 0 && !loading && (
        <NotificationBanner
          storageKey="work_empty_banner"
          message="Notice: Workspace ready. You currently have 0 tasks in this session."
          actionText="+ CREATE TASK"
          onActionClick={() => handleOpenNewModal("TODO")}
          secondaryText="EXPLORE DEMO"
          secondaryHref="/demo"
        />
      )}

      {/* Workspace Active View (Always Accessible) */}
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
