"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

interface SubjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: {
    code: string;
    name: string;
    examDate: string;
    roomLocation?: string | null;
    targetGrade?: string | null;
  }) => Promise<void>;
}

export const SubjectModal: React.FC<SubjectModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [examDate, setExamDate] = useState("");
  const [roomLocation, setRoomLocation] = useState("");
  const [targetGrade, setTargetGrade] = useState("A");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || !name.trim() || !examDate) {
      setError("Subject code, name, and exam date/time are required");
      return;
    }

    setLoading(true);
    setError(null);
    try {
      await onSubmit({
        code: code.trim().toUpperCase(),
        name: name.trim(),
        examDate: new Date(examDate).toISOString(),
        roomLocation: roomLocation.trim() || null,
        targetGrade: targetGrade.trim() || null,
      });
      setCode("");
      setName("");
      setExamDate("");
      setRoomLocation("");
      setTargetGrade("A");
      onClose();
    } catch (err: any) {
      setError(err.message || "Failed to create subject");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="REGISTER UNIVERSITY EXAM SUBJECT"
      description="Initialize exam date, syllabus scope, and countdown parameters"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="p-2.5 border border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-mono text-xs">
            {error}
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <Input
            label="COURSE CODE *"
            placeholder="e.g. CS201, MATH102"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
          <Input
            label="TARGET GRADE"
            placeholder="e.g. A, B+, 4.0"
            value={targetGrade}
            onChange={(e) => setTargetGrade(e.target.value)}
          />
        </div>

        <Input
          label="COURSE / SUBJECT NAME *"
          placeholder="e.g. Distributed Systems & Concurrency"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <div className="grid grid-cols-2 gap-3">
          <Input
            type="datetime-local"
            label="EXAM DATE & TIME *"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            required
          />
          <Input
            label="EXAM HALL / ROOM LOCATION"
            placeholder="e.g. Building 3, Room 402"
            value={roomLocation}
            onChange={(e) => setRoomLocation(e.target.value)}
          />
        </div>

        <div className="pt-3 border-t border-neutral-200 dark:border-[#262626] flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={onClose}>
            CANCEL
          </Button>
          <Button type="submit" variant="primary" disabled={loading}>
            {loading ? "INITIALIZING..." : "REGISTER SUBJECT"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};
