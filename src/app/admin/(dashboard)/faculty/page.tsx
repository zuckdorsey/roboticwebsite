import Link from "next/link";
import FacultyTable from "@/components/admin/FacultyTable";
import { getFacultyMembers } from "@/lib/faculty";

export const dynamic = "force-dynamic";

export default async function AdminFacultyPage() {
  const members = await getFacultyMembers();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-polibatam-navy">Faculty members</h1>
          <p className="text-sm text-gray-500">Manage team information displayed on the public site.</p>
        </div>
        <Link
          href="/admin/faculty/new"
          className="inline-flex items-center gap-2 rounded-full bg-polibatam-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-polibatam-navy"
        >
          Add member
        </Link>
      </div>

      <FacultyTable members={members} />
    </div>
  );
}
