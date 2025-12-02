import FacultyForm from "@/components/admin/FacultyForm";
import { getFacultyMemberById } from "@/lib/faculty";
import { notFound } from "next/navigation";

interface EditFacultyMemberPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditFacultyMemberPage({ params }: EditFacultyMemberPageProps) {
  const { id } = await params;
  const member = await getFacultyMemberById(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Edit faculty member</h1>
        <p className="text-sm text-gray-500">Update the information shown on the public site.</p>
      </div>
      <FacultyForm mode="edit" memberId={id} initialData={member} />
    </div>
  );
}
