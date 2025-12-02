import CurriculumForm from "@/components/admin/CurriculumForm";

export default function NewCurriculumCoursePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Add curriculum course</h1>
        <p className="text-sm text-gray-500">Define course details and assign it to a semester.</p>
      </div>
      <CurriculumForm mode="create" />
    </div>
  );
}
