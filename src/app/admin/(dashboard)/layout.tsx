import type { Metadata } from "next";
import { getAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminNav from "@/components/admin/AdminNav";

export const metadata: Metadata = {
  title: "Admin Panel",
};

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <AdminNav />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
