/*
╭──────────────────────────────────────────────────────────────────╮
│                        PORTFOLIO PROJECT                          │
╰──────────────────────────────────────────────────────────────────╯

Project : Polibatam Robotic Major Website
Author  : zuckdorsey
Website : https://ababil.is-not-a.dev
GitHub  : zuckdorsey
Year    : 2025

This project showcases my technical skills and coding style.
Feel free to explore and provide feedback!
*/

import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { uploadBufferToCloudinary } from "@/lib/cloudinary";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

export async function POST(request: NextRequest) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file");
  const folderEntry = formData.get("folder");
  const folder = typeof folderEntry === "string" ? folderEntry.trim() : undefined;

  if (!(file instanceof File)) {
    return NextResponse.json({ message: "File is required" }, { status: 400 });
  }

  if (file.size > MAX_FILE_SIZE) {
    return NextResponse.json({ message: "File too large" }, { status: 400 });
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ message: "Unsupported file type" }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  try {
    const uploadResult = await uploadBufferToCloudinary(buffer, {
      folder,
      resourceType: "image",
    });

    return NextResponse.json(
      { url: uploadResult.secure_url, publicId: uploadResult.public_id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Cloudinary upload failed", error);
    return NextResponse.json({ message: "Failed to upload image" }, { status: 500 });
  }
}
