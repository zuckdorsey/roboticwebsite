import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { getAuthSession } from "@/lib/auth";

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        // Check authentication
        const session = await getAuthSession();
        if (!session || !session.user) {
            return NextResponse.json(
                { error: "Unauthorized. Admin access required." },
                { status: 401 }
            );
        }

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
        try {
            await cloudinary.uploader.destroy(image.publicId);
        } catch (cloudinaryError) {
            console.error("Failed to delete from Cloudinary:", cloudinaryError);
            // Continue with database deletion even if Cloudinary fails
        }

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
