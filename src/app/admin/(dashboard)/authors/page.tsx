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
import { getAuthors, deleteAuthor } from "@/lib/actions/authors";
import { Plus, Pencil, Trash2, User } from "lucide-react";
import Image from "next/image";

export default async function AuthorsPage() {
    const authors = await getAuthors();

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-polibatam-navy">Authors</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage blog authors and contributors
                    </p>
                </div>
                <Link
                    href="/admin/authors/new"
                    className="flex items-center gap-2 rounded-xl bg-polibatam-orange px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-polibatam-orange/20 transition hover:bg-polibatam-orange/90 hover:shadow-polibatam-orange/30"
                >
                    <Plus className="h-4 w-4" />
                    Add Author
                </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                    <thead className="bg-gray-50/50 text-xs uppercase text-gray-500">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Author</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">Posts</th>
                            <th className="px-6 py-4 text-right font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {authors.map((author) => (
                            <tr key={author.id} className="group hover:bg-gray-50/50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                                            {author.photo ? (
                                                <Image
                                                    src={author.photo}
                                                    alt={author.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            ) : (
                                                <div className="flex h-full w-full items-center justify-center text-gray-400">
                                                    <User className="h-5 w-5" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">
                                                {author.name}
                                            </div>
                                            <div className="text-xs text-gray-500 line-clamp-1 max-w-[200px]">
                                                {author.bio}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                                        {author.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    {author._count.posts} posts
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                                        <Link
                                            href={`/admin/authors/${author.id}`}
                                            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-polibatam-orange"
                                            title="Edit"
                                        >
                                            <Pencil className="h-4 w-4" />
                                        </Link>
                                        <form action={deleteAuthor.bind(null, author.id)}>
                                            <button
                                                className="rounded-lg p-2 text-gray-400 hover:bg-red-50 hover:text-red-500"
                                                title="Delete"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {authors.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                                    No authors found. Create one to get started.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
