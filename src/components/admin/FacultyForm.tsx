'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { FacultyMemberDTO } from "@/lib/faculty";

interface FacultyFormProps {
  mode: "create" | "edit";
  memberId?: string;
  initialData?: FacultyMemberDTO;
}

export default function FacultyForm({ mode, memberId, initialData }: FacultyFormProps) {
  const router = useRouter();
  const [name, setName] = useState(initialData?.name ?? "");
  const [role, setRole] = useState(initialData?.role ?? "");
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [position, setPosition] = useState(initialData?.position ?? "");
  const [nidn, setNidn] = useState(initialData?.nidn ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [expertise, setExpertise] = useState(initialData?.expertise ?? "");
  const [educationInput, setEducationInput] = useState((initialData?.education ?? []).join("\n"));
  const [specialization, setSpecialization] = useState(initialData?.specialization ?? "");
  const [photo, setPhoto] = useState(initialData?.photo ?? "");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [twitter, setTwitter] = useState(initialData?.social?.twitter ?? "");
  const [facebook, setFacebook] = useState(initialData?.social?.facebook ?? "");
  const [instagram, setInstagram] = useState(initialData?.social?.instagram ?? "");
  const [linkedin, setLinkedin] = useState(initialData?.social?.linkedin ?? "");
  const [displayOrder, setDisplayOrder] = useState(String(initialData?.displayOrder ?? 0));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    const education = educationInput
      .split(/\r?\n/)
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("role", role);
    formData.append("title", title);
    formData.append("position", position);
    formData.append("nidn", nidn);
    formData.append("email", email);
    formData.append("expertise", expertise);
    formData.append("education", JSON.stringify(education));
    formData.append("specialization", specialization);
    formData.append("displayOrder", displayOrder);

    // Social links
    formData.append("social", JSON.stringify({
      twitter,
      facebook,
      instagram,
      linkedin,
    }));

    if (photoFile) {
      formData.append("photo", photoFile);
    } else if (photo) {
      formData.append("photo", photo);
    }

    try {
      const endpoint = mode === "create" ? "/api/faculty" : `/api/faculty/${memberId}`;
      const method = mode === "create" ? "POST" : "PUT";

      const response = await fetch(endpoint, {
        method,
        body: formData,
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to save faculty member");
      }

      setSuccess(mode === "create" ? "Faculty member created successfully" : "Faculty member updated successfully");
      router.replace("/admin/faculty");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      {success && <p className="rounded-md bg-emerald-100 px-4 py-2 text-sm text-emerald-700">{success}</p>}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Full name"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Role</span>
          <input
            required
            value={role}
            onChange={(event) => setRole(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Primary role"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Title</span>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Academic title"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Position</span>
          <input
            value={position}
            onChange={(event) => setPosition(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Position"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">NIDN</span>
          <input
            value={nidn}
            onChange={(event) => setNidn(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="Academic ID"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="name@example.com"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-700">Display order</span>
          <input
            type="number"
            min={0}
            value={displayOrder}
            onChange={(event) => setDisplayOrder(event.target.value)}
            className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
            placeholder="0"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Expertise summary</span>
        <input
          value={expertise}
          onChange={(event) => setExpertise(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Expertise summary"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Education (one per line)</span>
        <textarea
          value={educationInput}
          onChange={(event) => setEducationInput(event.target.value)}
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder={"M.Sc in ...\nB.Eng in ..."}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Specialization (comma separated)</span>
        <input
          value={specialization}
          onChange={(event) => setSpecialization(event.target.value)}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
          placeholder="Robotics, Automation, AI"
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-gray-700">Photo</span>
        <div className="flex flex-col gap-2">
          {photo && typeof photo === 'string' && (
            <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-200">
              <img src={photo} alt="Preview" className="h-full w-full object-cover" />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setPhotoFile(file);
              }
            }}
            className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-polibatam-orange/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-polibatam-orange hover:file:bg-polibatam-orange/20"
          />
        </div>
      </label>

      <div>
        <span className="text-sm font-medium text-gray-700">Social links</span>
        <div className="mt-3 grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">Twitter URL</span>
            <input
              value={twitter}
              onChange={(event) => setTwitter(event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
              placeholder="https://twitter.com/..."
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">Facebook URL</span>
            <input
              value={facebook}
              onChange={(event) => setFacebook(event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
              placeholder="https://facebook.com/..."
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">Instagram URL</span>
            <input
              value={instagram}
              onChange={(event) => setInstagram(event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
              placeholder="https://instagram.com/..."
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-xs text-gray-500">LinkedIn URL</span>
            <input
              value={linkedin}
              onChange={(event) => setLinkedin(event.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 focus:border-polibatam-orange focus:outline-none"
              placeholder="https://linkedin.com/in/..."
            />
          </label>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          disabled={loading}
          onClick={() => router.push("/admin/faculty")}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-polibatam-orange px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-polibatam-navy disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Saving..." : mode === "create" ? "Create member" : "Update member"}
        </button>
      </div>
    </form>
  );
}
