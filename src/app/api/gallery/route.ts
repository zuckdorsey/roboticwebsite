import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadBufferToCloudinary } from "@/lib/cloudinary";

export async function GET() {
    try {
        console.log("Fetching gallery images...");
        const images = await prisma.galleryImage.findMany({
            orderBy: { createdAt: "desc" },
        });
        console.log("Fetched images:", images);
        return NextResponse.json(images);
    } catch (error) {
        console.error("Error fetching gallery images:", error);
        return NextResponse.json(
            { error: "Failed to fetch images" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file") as File;
        const caption = formData.get("caption") as string;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const uploadResult = await uploadBufferToCloudinary(buffer, {
            folder: "roboticwebsite/gallery",
        });

        const newImage = await prisma.galleryImage.create({
            data: {
                url: uploadResult.secure_url,
                publicId: uploadResult.public_id,
                caption: caption || "",
            },
        });

        return NextResponse.json(newImage, { status: 201 });
    } catch (error) {
        console.error("Error uploading gallery image:", error);
        return NextResponse.json(
            { error: "Failed to upload image" },
            { status: 500 }
        );
    }
}
