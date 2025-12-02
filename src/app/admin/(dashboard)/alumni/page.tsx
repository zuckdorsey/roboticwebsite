import Link from "next/link";
import AlumniTable from "@/components/admin/AlumniTable";
import { getAlumniStories } from "@/lib/alumni";

export const dynamic = "force-dynamic";

export default async function AdminAlumniPage() {
  const stories = await getAlumniStories();

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-polibatam-navy">Alumni stories</h1>
          <p className="text-sm text-gray-500">Highlight alumni experiences for prospective students.</p>
        </div>
        <Link
          href="/admin/alumni/new"
          className="inline-flex items-center gap-2 rounded-full bg-polibatam-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-polibatam-navy"
        >
          Add story
        </Link>
      </div>

      <AlumniTable stories={stories} />
    </div>
  );
}
