import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const image = await prisma.galleryImage.findUnique({
            where: { id },
        });

        if (!image) {
            return NextResponse.json(
                { error: "Image not found" },
                { status: 404 }
            );
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(image.publicId);

        // Delete from Database
        await prisma.galleryImage.delete({
            where: { id },
        });

        return NextResponse.json({ message: "Image deleted successfully" });
    } catch (error) {
        console.error("Error deleting gallery image:", error);
        return NextResponse.json(
            { error: "Failed to delete image" },
            { status: 500 }
        );
    }
}
