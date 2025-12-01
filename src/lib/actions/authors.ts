'use server';

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadBufferToCloudinary } from "@/lib/cloudinary";
import { z } from "zod";

const AuthorSchema = z.object({
    name: z.string().min(1, "Name is required"),
    role: z.string().min(1, "Role is required"),
    bio: z.string().min(1, "Bio is required"),
    photo: z.string().url("Photo URL is required"),
    social: z.string().optional(),
});

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_IMAGE_TYPES = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
]);

export async function getAuthors() {
    return prisma.author.findMany({
        orderBy: { createdAt: "desc" },
        include: { _count: { select: { posts: true } } },
    });
}

export async function getAuthorById(id: string) {
    return prisma.author.findUnique({
        where: { id },
    });
}

export async function createAuthor(formData: FormData) {
    const name = formData.get("name");
    const role = formData.get("role");
    const bio = formData.get("bio");
    const socialEntry = formData.get("social");
    const file = formData.get("photo");

    if (typeof name !== "string" || typeof role !== "string" || typeof bio !== "string") {
        throw new Error("Invalid data submitted");
    }

    if (!(file instanceof File) || file.size === 0) {
        throw new Error("Author photo is required");
    }

    if (file.size > MAX_IMAGE_SIZE) {
        throw new Error("Photo exceeds 5MB limit");
    }

    if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
        throw new Error("Unsupported photo file type");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const upload = await uploadBufferToCloudinary(buffer, {
        folder: "authors",
        resourceType: "image",
    });

    const validated = AuthorSchema.safeParse({
        name,
        role,
        bio,
        photo: upload.secure_url,
        social: typeof socialEntry === "string" && socialEntry.trim() ? socialEntry : undefined,
    });

    if (!validated.success) {
        throw new Error("Invalid data");
    }

    await prisma.author.create({
        data: validated.data,
    });

    revalidatePath("/admin/authors");
    redirect("/admin/authors");
}

export async function updateAuthor(id: string, formData: FormData) {
    const name = formData.get("name");
    const role = formData.get("role");
    const bio = formData.get("bio");
    const socialEntry = formData.get("social");
    const existingPhotoEntry = formData.get("currentPhoto");
    const file = formData.get("photo");

    if (typeof name !== "string" || typeof role !== "string" || typeof bio !== "string") {
        throw new Error("Invalid data submitted");
    }

    let photoUrl = typeof existingPhotoEntry === "string" ? existingPhotoEntry : undefined;

    if (file instanceof File && file.size > 0) {
        if (file.size > MAX_IMAGE_SIZE) {
            throw new Error("Photo exceeds 5MB limit");
        }

        if (!ALLOWED_IMAGE_TYPES.has(file.type)) {
            throw new Error("Unsupported photo file type");
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const upload = await uploadBufferToCloudinary(buffer, {
            folder: "authors",
            resourceType: "image",
        });

        photoUrl = upload.secure_url;
    }

    if (!photoUrl) {
        throw new Error("Author photo is required");
    }

    const validated = AuthorSchema.safeParse({
        name,
        role,
        bio,
        photo: photoUrl,
        social: typeof socialEntry === "string" && socialEntry.trim() ? socialEntry : undefined,
    });

    if (!validated.success) {
        throw new Error("Invalid data");
    }

    await prisma.author.update({
        where: { id },
        data: validated.data,
    });

    revalidatePath("/admin/authors");
    redirect("/admin/authors");
}

export async function deleteAuthor(id: string) {
    await prisma.author.delete({
        where: { id },
    });

    revalidatePath("/admin/authors");
}
