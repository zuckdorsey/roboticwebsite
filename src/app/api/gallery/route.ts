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

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadBufferToCloudinary } from "@/lib/cloudinary";
import cloudinary from "@/lib/cloudinary";
import { getAuthSession } from "@/lib/auth";

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
        // Check authentication
        const session = await getAuthSession();
        if (!session || !session.user) {
            return NextResponse.json(
                { error: "Unauthorized. Admin access required." },
                { status: 401 }
            );
        }

        const formData = await request.formData();
        const file = formData.get("file") as File;
        const caption = formData.get("caption") as string;

        if (!file) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        // Validate file type and size
        const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
        const maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: "Invalid file type. Only JPEG, PNG, GIF, and WebP images are allowed." },
                { status: 400 }
            );
        }
        
        if (file.size > maxSize) {
            return NextResponse.json(
                { error: "File is too large. Maximum size is 5MB." },
                { status: 400 }
            );
        }

        // Validate caption length
        if (caption && caption.length > 200) {
            return NextResponse.json(
                { error: "Caption is too long. Maximum length is 200 characters." },
                { status: 400 }
            );
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        
        let uploadResult;
        try {
            uploadResult = await uploadBufferToCloudinary(buffer, {
                folder: "roboticwebsite/gallery",
            });
        } catch (uploadError) {
            console.error("Cloudinary upload failed:", uploadError);
            return NextResponse.json(
                { error: "Failed to upload image to storage" },
                { status: 500 }
            );
        }

        try {
            const newImage = await prisma.galleryImage.create({
                data: {
                    url: uploadResult.secure_url,
                    publicId: uploadResult.public_id,
                    caption: caption || "",
                },
            });

            return NextResponse.json(newImage, { status: 201 });
        } catch (dbError) {
            // If database insert fails, clean up the uploaded image
            console.error("Database insert failed:", dbError);
            try {
                await cloudinary.uploader.destroy(uploadResult.public_id);
            } catch (cleanupError) {
                console.error("Failed to cleanup Cloudinary image:", cleanupError);
            }
            
            return NextResponse.json(
                { error: "Failed to save image to database" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error uploading gallery image:", error);
        return NextResponse.json(
            { error: "Failed to upload image" },
            { status: 500 }
        );
    }
}
