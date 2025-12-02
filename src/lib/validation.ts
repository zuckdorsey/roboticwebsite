import { z } from "zod";

export const postInputSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(1).max(240).optional(),
  description: z.string().min(20).max(320),
  content: z.string().min(1),
  coverImage: z.string().url(),
  authorId: z.string().optional().nullable(),
});

export type PostInput = z.infer<typeof postInputSchema>;

const optionalUrl = z
  .string()
  .url()
  .optional()
  .or(z.literal(""))
  .transform((value) => (value ? value : undefined));

const optionalString = z
  .string()
  .optional()
  .or(z.literal(""))
  .transform((value) => (value ? value : undefined));

export const facultyMemberInputSchema = z.object({
  name: z.string().min(1).max(200),
  role: z.string().min(1).max(200),
  title: optionalString,
  position: optionalString,
  nidn: optionalString,
  email: z
    .string()
    .email()
    .optional()
    .or(z.literal(""))
    .transform((value) => (value ? value : undefined)),
  expertise: optionalString,
  education: z.array(z.string().min(1)).optional(),
  specialization: optionalString,
  photo: optionalUrl,
  social: z
    .object({
      twitter: optionalUrl,
      facebook: optionalUrl,
      instagram: optionalUrl,
      linkedin: optionalUrl,
    })
    .partial()
    .optional()
    .transform((value) =>
      value
        ? Object.fromEntries(
            Object.entries(value).filter(([, url]) => typeof url === "string" && url.length > 0)
          )
        : undefined
    ),
  displayOrder: z.number().int().min(0).optional(),
});

export type FacultyMemberInput = z.infer<typeof facultyMemberInputSchema>;

export const alumniStoryInputSchema = z.object({
  name: z.string().min(1).max(150),
  role: z.string().min(1).max(150),
  company: optionalString,
  image: optionalUrl,
  quote: z.string().min(1),
  rating: z.number().int().min(1).max(5).optional().default(5),
  tags: z.array(z.string().min(1)).optional(),
  graduationYear: z.string().min(2).max(10),
  displayOrder: z.number().int().min(0).optional(),
});

export type AlumniStoryInput = z.infer<typeof alumniStoryInputSchema>;

export const curriculumCourseInputSchema = z.object({
  semester: z.number().int().min(1).max(20),
  code: z.string().min(1).max(50),
  name: z.string().min(1).max(200),
  credits: z.number().int().min(0).max(30),
  description: z.string().min(1),
  type: z.enum(["mandatory", "elective"]),
  displayOrder: z.number().int().min(0).optional(),
});

export type CurriculumCourseInput = z.infer<typeof curriculumCourseInputSchema>;
