"use client";

import React, { useState, useEffect } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Priority, TaskItem, TaskStatus } from "@/types";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    title: string;
    description?: string;
    priority: Priority;
    status: TaskStatus;
    dueDate?: string | null;
    tags: string[];
  }) => Promise<void>;
  task?: TaskItem | null;
  defaultStatus?: TaskStatus;
}

export const TaskModal: React.FC<TaskModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  task,
  defaultStatus = "TODO",
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<Priority>("MEDIUM");
  const [status, setStatus] = useState<TaskStatus>(defaultStatus);
  const [dueDate, setDueDate] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setPriority(task.priority);
      setStatus(task.status);
      setDueDate(task.dueDate ? task.dueDate.split("T")[0] : "");
      setTagInput(task.tags ? task.tags.join(", ") : "");
    } else {
      setTitle("");
      setDescription("");
      setPriority("MEDIUM");
      setStatus(defaultStatus);
      setDueDate("");
      setTagInput("");
    }
    setError(null);
  }, [task, defaultStatus, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    const tags = tagInput
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t.length > 0);

    setLoading(true);
    setError(null);
    try {
      await onSubmit({
        title: title.trim(),
        description: description.trim() || undefined,
        priority,
        status,
        dueDate: dueDate ? new Date(dueDate).toISOString() : null,
        tags,
      });
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to save task");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={task ? "EDIT TASK SPECIFICATION" : "NEW WORK TASK"}
      description={task ? `Task ID: ${task.id}` : "Configure work item parameters"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-2.5 border border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-mono text-xs">
            {error}
          </div>
        )}

        <Input
          label="TASK TITLE *"
          placeholder="e.g. Implement OAuth2 Server Layer"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Textarea
          label="DESCRIPTION / ACCEPTANCE CRITERIA"
          placeholder="Detail specifications, edge cases, or pull request guidelines..."
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="grid grid-cols-2 gap-3">
          <Select
            label="PRIORITY LEVEL"
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            options={[
              { label: "LOW - Priority 04", value: "LOW" },
              { label: "MEDIUM - Priority 03", value: "MEDIUM" },
              { label: "HIGH - Priority 02", value: "HIGH" },
              { label: "URGENT - Priority 01", value: "URGENT" },
            ]}
          />

          <Select
            label="INITIAL STATUS"
            value={status}
            onChange={(e) => setStatus(e.target.value as TaskStatus)}
            options={[
              { label: "BACKLOG / TO DO", value: "TODO" },
              { label: "IN PROGRESS", value: "IN_PROGRESS" },
              { label: "COMPLETED", value: "DONE" },
            ]}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Input
            type="date"
            label="DUE DATE"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <Input
            label="TAGS (COMMA SEPARATED)"
            placeholder="api, backend, bug"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
          />
        </div>

        <div className="pt-3 border-t border-neutral-200 dark:border-[#262626] flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            CANCEL
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "SAVING..." : task ? "UPDATE TASK" : "DISPATCH TASK"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
