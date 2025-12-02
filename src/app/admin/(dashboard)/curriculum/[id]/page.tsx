import CurriculumForm from "@/components/admin/CurriculumForm";
import { getCurriculumCourseById } from "@/lib/curriculum";
import { notFound } from "next/navigation";

interface EditCurriculumCoursePageProps {
  params: Promise<{ id: string }>;
}

export default async function EditCurriculumCoursePage({ params }: EditCurriculumCoursePageProps) {
  const { id } = await params;
  const course = await getCurriculumCourseById(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Edit curriculum course</h1>
        <p className="text-sm text-gray-500">Update course details for the selected semester.</p>
      </div>
      <CurriculumForm mode="edit" courseId={id} initialData={course} />
    </div>
  );
}
