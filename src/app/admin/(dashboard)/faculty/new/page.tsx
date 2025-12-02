import FacultyForm from "@/components/admin/FacultyForm";

export default function NewFacultyMemberPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Add faculty member</h1>
        <p className="text-sm text-gray-500">Provide details about the faculty member for the public site.</p>
      </div>
      <FacultyForm mode="create" />
    </div>
  );
}
