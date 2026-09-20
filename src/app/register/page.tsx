"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { UserPlus } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Registration failed");
      }

      router.push("/login?registered=true");
    } catch (err: any) {
      setError(err.message || "Failed to register profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[75vh] items-center justify-center">
      <div className="w-full max-w-md border border-neutral-300 dark:border-[#262626] bg-white dark:bg-[#141414] p-6 sm:p-8">
        {/* Header */}
        <div className="pb-4 mb-5 border-b border-neutral-200 dark:border-[#202020]">
          <div className="flex items-center space-x-2">
            <UserPlus className="w-4 h-4 text-neutral-900 dark:text-white" />
            <h1 className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              REGISTER NEW OPERATOR
            </h1>
          </div>
          <p className="mt-1 font-mono text-xs text-neutral-500">
            CREATE USER PROFILE WITH LOCAL STORAGE AND DB PERSISTENCE.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2.5 border border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-mono text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="FULL NAME / IDENTIFIER"
            placeholder="Ada Lovelace"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="email"
            label="EMAIL ADDRESS"
            placeholder="ada@monolith.local"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            label="MASTER PASSWORD"
            placeholder="Min 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="primary"
            className="w-full h-10"
            disabled={loading}
          >
            {loading ? "INITIALIZING..." : "REGISTER ACCOUNT"}
          </Button>
        </form>

        <div className="mt-4 text-center font-mono text-xs text-neutral-500">
          <span>ALREADY REGISTERED? </span>
          <Link
            href="/login"
            className="font-bold underline text-neutral-900 dark:text-white"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
}
