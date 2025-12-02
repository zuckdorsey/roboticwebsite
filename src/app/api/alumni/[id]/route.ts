import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { alumniStoryInputSchema } from "@/lib/validation";
import {
  deleteAlumniStory,
  getAlumniStoryById,
  updateAlumniStory,
} from "@/lib/alumni";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const story = await getAlumniStoryById(id);

  if (!story) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(story);
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getAlumniStoryById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const contentType = request.headers.get("content-type") || "";
  let data: any = {};

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const imageEntry = formData.get("image");

    // Convert FormData to object
    const rawData: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (key === 'tags') {
        try {
          rawData[key] = JSON.parse(value as string);
        } catch (e) {
          // ignore
        }
      } else if (key !== 'image') {
        rawData[key] = value;
      }
    });

    // Handle numbers
    if (rawData.rating) rawData.rating = Number(rawData.rating);
    if (rawData.displayOrder) rawData.displayOrder = Number(rawData.displayOrder);

    if (imageEntry && typeof imageEntry === 'object' && 'arrayBuffer' in imageEntry) {
      const file = imageEntry as File;
      if (file.size > 0) {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const { uploadBufferToCloudinary } = await import("@/lib/cloudinary");
          const uploadResult = await uploadBufferToCloudinary(buffer, {
            folder: "alumni",
            publicId: `alumni-${id}-${Date.now()}`,
          });
          rawData.image = uploadResult.secure_url;
        } catch (error) {
          console.error("Image upload failed:", error);
          return NextResponse.json(
            { message: "Failed to upload image" },
            { status: 500 }
          );
        }
      }
    } else if (typeof imageEntry === 'string') {
      rawData.image = imageEntry;
    }

    data = rawData;
  } else {
    data = await request.json().catch(() => null);
  }

  if (!data) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  const parsed = alumniStoryInputSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const updated = await updateAlumniStory(id, parsed.data);

  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getAlumniStoryById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await deleteAlumniStory(id);

  return new NextResponse(null, { status: 204 });
}
