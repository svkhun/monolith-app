"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Lock, ArrowRight, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/work");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Failed to authenticate");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: "demo@monolith.local",
        password: "demo1234",
      });
      if (res?.error) {
        setError(res.error);
      } else {
        router.push("/work");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Failed to load demo account");
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
            <Lock className="w-4 h-4 text-neutral-900 dark:text-white" />
            <h1 className="font-mono text-sm font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
              MONOLITH ACCESS GATEWAY
            </h1>
          </div>
          <p className="mt-1 font-mono text-xs text-neutral-500">
            AUTHENTICATE WITH SYSTEM CREDENTIALS OR LAUNCH DEMO PROFILE.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-2.5 border border-red-600 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-mono text-xs">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            label="EMAIL IDENTIFIER"
            placeholder="engineer@monolith.local"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            type="password"
            label="PASSWORD CREDENTIAL"
            placeholder="••••••••••••"
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
            {loading ? "AUTHENTICATING..." : "VERIFY & ENTER"}
          </Button>
        </form>

        {/* Demo Quick Access */}
        <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-[#202020]">
          <Button
            type="button"
            variant="secondary"
            className="w-full h-9 flex items-center justify-center gap-2"
            onClick={handleDemoLogin}
            disabled={loading}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>INSTANT DEMO ACCESS (ONE-CLICK)</span>
          </Button>
        </div>

        {/* Registration Link */}
        <div className="mt-4 text-center font-mono text-xs text-neutral-500">
          <span>NO ACCOUNT? </span>
          <Link
            href="/register"
            className="font-bold underline text-neutral-900 dark:text-white"
          >
            CREATE OPERATOR PROFILE
          </Link>
        </div>
      </div>
    </div>
  );
}
