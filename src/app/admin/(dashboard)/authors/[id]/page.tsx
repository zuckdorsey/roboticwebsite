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

import Link from "next/link";
import Image from "next/image";
import { getAuthorById, updateAuthor } from "@/lib/actions/authors";
import { ArrowLeft, Save, Upload } from "lucide-react";
import { notFound } from "next/navigation";

interface EditAuthorPageProps {
    params: Promise<{ id: string }>;
}

export default async function EditAuthorPage({ params }: EditAuthorPageProps) {
    const { id } = await params;
    const author = await getAuthorById(id);

    if (!author) {
        notFound();
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-8">
                <Link
                    href="/admin/authors"
                    className="mb-4 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-polibatam-orange"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Authors
                </Link>
                <h1 className="text-2xl font-bold text-polibatam-navy">Edit Author</h1>
                <p className="mt-1 text-sm text-gray-500">
                    Update profile for {author.name}
                </p>
            </div>

            <form action={updateAuthor.bind(null, author.id)} className="space-y-6">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-6">
                    {/* Name */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={author.name}
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-polibatam-orange focus:ring-1 focus:ring-polibatam-orange"
                        />
                    </div>

                    {/* Role */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Role / Title
                        </label>
                        <input
                            type="text"
                            name="role"
                            defaultValue={author.role}
                            required
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-polibatam-orange focus:ring-1 focus:ring-polibatam-orange"
                        />
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Bio
                        </label>
                        <textarea
                            name="bio"
                            defaultValue={author.bio}
                            required
                            rows={4}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-polibatam-orange focus:ring-1 focus:ring-polibatam-orange"
                        />
                    </div>

                    {/* Photo Upload */}
                    <div className="space-y-3">
                        <label className="block text-sm font-semibold text-gray-700">
                            Profile Photo
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 overflow-hidden rounded-full border border-gray-200">
                                <Image
                                    src={author.photo}
                                    alt={author.name}
                                    fill
                                    sizes="64px"
                                    className="object-cover"
                                />
                            </div>
                            <label className="flex cursor-pointer flex-1 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-gray-300 px-4 py-4 text-center text-sm text-gray-500 transition hover:border-polibatam-orange hover:text-polibatam-orange">
                                <Upload className="h-5 w-5" />
                                <span className="font-medium">Upload new photo</span>
                                <span className="text-xs text-gray-400">PNG, JPG, WEBP up to 5MB</span>
                                <input
                                    type="file"
                                    name="photo"
                                    accept="image/*"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <input type="hidden" name="currentPhoto" value={author.photo} />
                        <p className="text-xs text-gray-500">
                            Leave the upload empty to keep the current photo.
                        </p>
                    </div>

                    {/* Social Links (JSON) */}
                    <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700">
                            Social Links (Optional JSON)
                        </label>
                        <input
                            type="text"
                            name="social"
                            defaultValue={author.social || ""}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm font-mono outline-none focus:border-polibatam-orange focus:ring-1 focus:ring-polibatam-orange"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <Link
                        href="/admin/authors"
                        className="rounded-xl px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="flex items-center gap-2 rounded-xl bg-polibatam-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-polibatam-orange/20 transition hover:bg-polibatam-orange/90 hover:shadow-polibatam-orange/30"
                    >
                        <Save className="h-4 w-4" />
                        Update Author
                    </button>
                </div>
            </form>
        </div>
    );
}
