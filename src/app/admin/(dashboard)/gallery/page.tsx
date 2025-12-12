"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Trash2, Upload, Loader2 } from "lucide-react";
import Image from "next/image";

interface GalleryImage {
    id: string;
    url: string;
    caption: string;
}

export default function GalleryAdminPage() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [caption, setCaption] = useState("");

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const res = await fetch("/api/gallery");
            if (!res.ok) throw new Error("Failed to fetch images");
            const data = await res.json();
            if (Array.isArray(data)) {
                setImages(data);
            } else {
                console.error("Gallery data is not an array:", data);
                setImages([]);
            }
        } catch (error) {
            console.error("Failed to fetch images", error);
        } finally {
            setLoading(false);
        }
    };

    const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const file = formData.get("file") as File;

        if (!file) return;

        setUploading(true);
        try {
            const res = await fetch("/api/gallery", {
                method: "POST",
                body: formData,
            });

            if (res.ok) {
                const newImage = await res.json();
                setImages([newImage, ...images]);
                setCaption("");
                (e.target as HTMLFormElement).reset();
            }
        } catch (error) {
            console.error("Failed to upload image", error);
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this image?")) return;

        try {
            const res = await fetch(`/api/gallery/${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                setImages(images.filter((img) => img.id !== id));
            }
        } catch (error) {
            console.error("Failed to delete image", error);
        }
    };

    return (
        <div className="p-6 space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-polibatam-navy">Gallery Management</h1>
            </div>

            {/* Upload Section */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-xl font-semibold mb-4 text-polibatam-navy">Upload New Image</h2>
                <form onSubmit={handleUpload} className="flex gap-4 items-end">
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Image File</label>
                        <input
                            type="file"
                            name="file"
                            accept="image/*"
                            required
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-polibatam-orange/10 file:text-polibatam-orange hover:file:bg-polibatam-orange/20"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Caption (Optional)</label>
                        <input
                            type="text"
                            name="caption"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Enter image caption"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-polibatam-orange focus:border-transparent"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={uploading}
                        className="px-6 py-2 bg-polibatam-orange text-white rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                        Upload
                    </button>
                </form>
            </div>

            {/* Gallery Grid */}
            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 animate-spin text-polibatam-orange" />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group relative bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <Image
                                    src={image.url}
                                    alt={image.caption || "Gallery Image"}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <button
                                        onClick={() => handleDelete(image.id)}
                                        className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            {image.caption && (
                                <div className="p-3 border-t border-gray-100">
                                    <p className="text-sm text-gray-600 truncate">{image.caption}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}
