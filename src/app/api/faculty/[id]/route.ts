import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import {
  deleteFacultyMember,
  getFacultyMemberById,
  updateFacultyMember,
} from "@/lib/faculty";
import { facultyMemberInputSchema } from "@/lib/validation";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const member = await getFacultyMemberById(id);

  if (!member) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(member);
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
  const existing = await getFacultyMemberById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const contentType = request.headers.get("content-type") || "";
  let data: any = {};

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const photoEntry = formData.get("photo");

    // Convert FormData to object
    const rawData: Record<string, any> = {};
    formData.forEach((value, key) => {
      if (key === 'social') {
        try {
          rawData[key] = JSON.parse(value as string);
        } catch (e) {
          // ignore invalid json
        }
      } else if (key === 'education') {
        try {
          rawData[key] = JSON.parse(value as string);
        } catch (e) {
          // ignore
        }
      } else if (key !== 'photo') {
        rawData[key] = value;
      }
    });

    // Handle numbers
    if (rawData.displayOrder) rawData.displayOrder = Number(rawData.displayOrder);

    if (photoEntry && typeof photoEntry === 'object' && 'arrayBuffer' in photoEntry) {
      const file = photoEntry as File;
      if (file.size > 0) {
        try {
          const arrayBuffer = await file.arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);
          const { uploadBufferToCloudinary } = await import("@/lib/cloudinary");
          const uploadResult = await uploadBufferToCloudinary(buffer, {
            folder: "faculty",
            publicId: `faculty-${id}-${Date.now()}`,
          });
          rawData.photo = uploadResult.secure_url;
        } catch (error) {
          console.error("Image upload failed:", error);
          return NextResponse.json(
            { message: "Failed to upload image" },
            { status: 500 }
          );
        }
      }
    } else if (typeof photoEntry === 'string') {
      rawData.photo = photoEntry;
    }

    data = rawData;
  } else {
    data = await request.json().catch(() => null);
  }

  if (!data) {
    return NextResponse.json({ message: "Invalid data" }, { status: 400 });
  }

  const parsed = facultyMemberInputSchema.safeParse(data);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const updated = await updateFacultyMember(id, parsed.data);

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
  const existing = await getFacultyMemberById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await deleteFacultyMember(id);

  return new NextResponse(null, { status: 204 });
}
