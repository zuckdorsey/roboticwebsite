import AlumniForm from "@/components/admin/AlumniForm";

export default function NewAlumniStoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Add alumni story</h1>
        <p className="text-sm text-gray-500">Share an alumni testimonial to inspire future students.</p>
      </div>
      <AlumniForm mode="create" />
    </div>
  );
}
