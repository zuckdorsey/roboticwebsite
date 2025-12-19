/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.error) {
        throw new Error(response.error);
      }

      router.replace("/admin");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Email</span>
        <input
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Password</span>
        <input
          required
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-polibatam-orange px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-polibatam-navy disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
