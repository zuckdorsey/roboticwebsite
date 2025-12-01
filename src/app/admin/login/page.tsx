import type { Metadata } from "next";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import LoginForm from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default async function AdminLoginPage() {
  const session = await getAuthSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-semibold text-polibatam-navy">Admin portal</h1>
          <p className="text-sm text-gray-500">Sign in to manage blog posts.</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
