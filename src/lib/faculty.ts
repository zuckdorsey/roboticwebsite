import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import type { FacultyMemberInput } from "@/lib/validation";

const SOCIAL_KEYS = ["twitter", "facebook", "instagram", "linkedin"] as const;
type SocialKey = (typeof SOCIAL_KEYS)[number];

export type FacultySocialLinks = Partial<Record<SocialKey, string>>;

export type FacultyMemberRecord = Prisma.FacultyMemberGetPayload<Prisma.FacultyMemberDefaultArgs>;

export type FacultyMemberDTO = Omit<FacultyMemberRecord, "social"> & {
  social: FacultySocialLinks | null;
};

function normalizeSocial(value: Prisma.JsonValue | null): FacultySocialLinks | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return null;
  }

  const entries = SOCIAL_KEYS.map((key) => {
    const url = (value as Record<string, unknown>)[key];

    if (typeof url === "string" && url.trim().length > 0) {
      return [key, url.trim()] as const;
    }

    return null;
  }).filter(Boolean) as Array<readonly [SocialKey, string]>;

  if (entries.length === 0) {
    return null;
  }

  return Object.fromEntries(entries) as FacultySocialLinks;
}

function mapFacultyMember(member: FacultyMemberRecord): FacultyMemberDTO {
  return {
    ...member,
    education: member.education ?? [],
    social: normalizeSocial(member.social ?? null),
  };
}

function buildFacultyData(data: FacultyMemberInput) {
  const education = Array.isArray(data.education)
    ? data.education.map((entry) => entry.trim()).filter((entry) => entry.length > 0)
    : [];

  const socialEntries = SOCIAL_KEYS.map((key) => {
    const value = data.social?.[key];
    if (typeof value === "string" && value.trim().length > 0) {
      return [key, value.trim()] as const;
    }
    return null;
  }).filter(Boolean) as Array<readonly [SocialKey, string]>;

  const social = socialEntries.length > 0 ? Object.fromEntries(socialEntries) : Prisma.JsonNull;

  return {
    name: data.name.trim(),
    role: data.role.trim(),
    title: data.title?.trim() ?? null,
    position: data.position?.trim() ?? null,
    nidn: data.nidn?.trim() ?? null,
    email: data.email?.trim() ?? null,
    expertise: data.expertise?.trim() ?? null,
    education,
    specialization: data.specialization?.trim() ?? null,
    photo: data.photo?.trim() ?? null,
    social,
    displayOrder: data.displayOrder ?? 0,
  };
}

export async function getFacultyMembers(): Promise<FacultyMemberDTO[]> {
  const records = await prisma.facultyMember.findMany({
    orderBy: [{ displayOrder: "asc" }, { name: "asc" }],
  });

  return records.map(mapFacultyMember);
}

export async function getFacultyMemberById(id: string): Promise<FacultyMemberDTO | null> {
  const record = await prisma.facultyMember.findUnique({ where: { id } });

  return record ? mapFacultyMember(record) : null;
}

export async function createFacultyMember(data: FacultyMemberInput): Promise<FacultyMemberDTO> {
  const result = await prisma.facultyMember.create({
    data: buildFacultyData(data),
  });

  return mapFacultyMember(result);
}

export async function updateFacultyMember(
  id: string,
  data: FacultyMemberInput
): Promise<FacultyMemberDTO> {
  const result = await prisma.facultyMember.update({
    where: { id },
    data: buildFacultyData(data),
  });

  return mapFacultyMember(result);
}

export async function deleteFacultyMember(id: string): Promise<void> {
  await prisma.facultyMember.delete({ where: { id } });
}
