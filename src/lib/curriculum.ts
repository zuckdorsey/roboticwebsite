import prisma from "@/lib/prisma";
import type { Prisma } from "@prisma/client";
import type { CurriculumCourseInput } from "@/lib/validation";

export type CurriculumCourseRecord = Prisma.CurriculumCourseGetPayload<Prisma.CurriculumCourseDefaultArgs>;
export type CurriculumCourseDTO = CurriculumCourseRecord;

export type CurriculumSemesterDTO = {
  semester: number;
  courses: CurriculumCourseDTO[];
};

function buildCourseData(data: CurriculumCourseInput) {
  return {
    semester: data.semester,
    code: data.code.trim(),
    name: data.name.trim(),
    credits: data.credits,
    description: data.description.trim(),
    type: data.type,
    displayOrder: data.displayOrder ?? 0,
  };
}

export async function getCurriculumCourses(): Promise<CurriculumCourseDTO[]> {
  return prisma.curriculumCourse.findMany({
    orderBy: [{ semester: "asc" }, { displayOrder: "asc" }, { name: "asc" }],
  });
}

export function groupCoursesBySemester(courses: CurriculumCourseDTO[]): CurriculumSemesterDTO[] {
  const grouped = new Map<number, CurriculumCourseDTO[]>();

  for (const course of courses) {
    const list = grouped.get(course.semester) ?? [];
    list.push(course);
    grouped.set(course.semester, list);
  }

  return Array.from(grouped.entries())
    .sort(([a], [b]) => a - b)
    .map(([semester, list]) => ({
      semester,
      courses: list.sort((a, b) => a.displayOrder - b.displayOrder || a.name.localeCompare(b.name)),
    }));
}

export async function getCurriculumCourseById(id: string): Promise<CurriculumCourseDTO | null> {
  return prisma.curriculumCourse.findUnique({ where: { id } });
}

export async function createCurriculumCourse(data: CurriculumCourseInput): Promise<CurriculumCourseDTO> {
  return prisma.curriculumCourse.create({
    data: buildCourseData(data),
  });
}

export async function updateCurriculumCourse(
  id: string,
  data: CurriculumCourseInput
): Promise<CurriculumCourseDTO> {
  return prisma.curriculumCourse.update({
    where: { id },
    data: buildCourseData(data),
  });
}

export async function deleteCurriculumCourse(id: string): Promise<void> {
  await prisma.curriculumCourse.delete({ where: { id } });
}
