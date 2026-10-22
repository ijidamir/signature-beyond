"use client";
import { useActionState } from "react";
import { login } from "@/lib/admin/actions";

const input = "w-full rounded border border-stone-300 bg-white px-3 py-2 text-sm";

export function LoginForm({ notice }: { notice?: string }) {
  const [state, action, pending] = useActionState(login, { error: "" });
  const message = state.error || notice;
  return (
    <form action={action} className="space-y-4">
      <div><label htmlFor="email" className="mb-1 block text-xs text-stone-600">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email" className={input} /></div>
      <div><label htmlFor="password" className="mb-1 block text-xs text-stone-600">Password</label>
        <input id="password" name="password" type="password" required autoComplete="current-password" className={input} /></div>
      <button type="submit" disabled={pending} className="w-full rounded bg-ink px-5 py-2 text-sm text-white disabled:opacity-60">{pending ? "Signing in..." : "Sign in"}</button>
      {message && <p role="alert" className="text-sm text-red-700">{message}</p>}
    </form>
  );
}
