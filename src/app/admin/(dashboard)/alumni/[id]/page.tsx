import AlumniForm from "@/components/admin/AlumniForm";
import { getAlumniStoryById } from "@/lib/alumni";
import { notFound } from "next/navigation";

interface EditAlumniStoryPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditAlumniStoryPage({ params }: EditAlumniStoryPageProps) {
  const { id } = await params;
  const story = await getAlumniStoryById(id);

  if (!story) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Edit alumni story</h1>
        <p className="text-sm text-gray-500">Keep alumni testimonials up to date.</p>
      </div>
      <AlumniForm mode="edit" storyId={id} initialData={story} />
    </div>
  );
}
