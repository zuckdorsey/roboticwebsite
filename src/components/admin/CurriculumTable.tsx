'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { CurriculumSemesterDTO } from "@/lib/curriculum";

interface CurriculumTableProps {
  semesters: CurriculumSemesterDTO[];
}

export default function CurriculumTable({ semesters }: CurriculumTableProps) {
  const router = useRouter();
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this course?")) {
      return;
    }

    setBusyId(id);
    setError(null);

    try {
      const response = await fetch(`/api/curriculum/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body?.message ?? "Failed to delete course");
      }

      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setBusyId(null);
    }
  };

  if (semesters.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-12 text-center text-gray-500">
        No curriculum courses found. Create one to get started.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {error && <p className="rounded-md bg-red-100 px-4 py-2 text-sm text-red-700">{error}</p>}
      {semesters.map((semester) => (
        <div key={semester.semester} className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <h3 className="text-sm font-semibold text-polibatam-navy">Semester {semester.semester}</h3>
            <span className="text-xs font-medium text-gray-500">{semester.courses.length} courses</span>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100 text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left">
                  <th className="px-4 py-3 font-medium text-gray-600">Code</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Course</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Credits</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Type</th>
                  <th className="px-4 py-3 font-medium text-gray-600">Order</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {semester.courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold text-polibatam-navy">{course.code}</td>
                    <td className="px-4 py-3 text-gray-700">
                      <div className="font-medium text-gray-900">{course.name}</div>
                      <div className="text-xs text-gray-500 line-clamp-2">{course.description}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{course.credits} SKS</td>
                    <td className="px-4 py-3 text-gray-600">{course.type === 'mandatory' ? 'Mandatory' : 'Elective'}</td>
                    <td className="px-4 py-3 text-gray-500">{course.displayOrder}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/curriculum/${course.id}`}
                          className="rounded-full border border-polibatam-orange px-4 py-1 text-xs font-semibold text-polibatam-orange transition hover:bg-polibatam-orange hover:text-white"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(course.id)}
                          disabled={busyId === course.id}
                          className="rounded-full border border-red-500 px-4 py-1 text-xs font-semibold text-red-500 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {busyId === course.id ? "Deleting..." : "Delete"}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
