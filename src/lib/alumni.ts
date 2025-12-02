import prisma from "@/lib/prisma";
import type { AlumniStoryInput } from "@/lib/validation";

import type { Prisma } from "@prisma/client";
export type AlumniStoryRecord = Prisma.AlumniStoryGetPayload<Prisma.AlumniStoryDefaultArgs>;

export type AlumniStoryDTO = AlumniStoryRecord;

function buildAlumniData(data: AlumniStoryInput) {
  const tags = Array.isArray(data.tags)
    ? data.tags.map((tag) => tag.trim()).filter((tag) => tag.length > 0)
    : [];

  return {
    name: data.name.trim(),
    role: data.role.trim(),
    company: data.company?.trim() ?? null,
    image: data.image?.trim() ?? null,
    quote: data.quote.trim(),
    rating: data.rating ?? 5,
    tags,
    graduationYear: data.graduationYear.trim(),
    displayOrder: data.displayOrder ?? 0,
  };
}

export async function getAlumniStories(): Promise<AlumniStoryDTO[]> {
  return prisma.alumniStory.findMany({
    orderBy: [{ displayOrder: "asc" }, { graduationYear: "desc" }],
  });
}

export async function getAlumniStoryById(id: string): Promise<AlumniStoryDTO | null> {
  return prisma.alumniStory.findUnique({ where: { id } });
}

export async function createAlumniStory(data: AlumniStoryInput): Promise<AlumniStoryDTO> {
  return prisma.alumniStory.create({
    data: buildAlumniData(data),
  });
}

export async function updateAlumniStory(id: string, data: AlumniStoryInput): Promise<AlumniStoryDTO> {
  return prisma.alumniStory.update({
    where: { id },
    data: buildAlumniData(data),
  });
}

export async function deleteAlumniStory(id: string): Promise<void> {
  await prisma.alumniStory.delete({ where: { id } });
}
