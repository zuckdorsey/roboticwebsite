import Link from "next/link";
import CurriculumTable from "@/components/admin/CurriculumTable";
import { getCurriculumCourses, groupCoursesBySemester } from "@/lib/curriculum";

export const dynamic = "force-dynamic";

export default async function AdminCurriculumPage() {
  const courses = await getCurriculumCourses();
  const semesters = groupCoursesBySemester(courses);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-polibatam-navy">Curriculum</h1>
          <p className="text-sm text-gray-500">Manage courses for each semester.</p>
        </div>
        <Link
          href="/admin/curriculum/new"
          className="inline-flex items-center gap-2 rounded-full bg-polibatam-orange px-5 py-2 text-sm font-semibold text-white transition hover:bg-polibatam-navy"
        >
          Add course
        </Link>
      </div>

      <CurriculumTable semesters={semesters} />
    </div>
  );
}
