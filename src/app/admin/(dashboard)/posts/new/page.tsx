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

import PostForm from "@/components/admin/PostForm";
import { getAuthors } from "@/lib/actions/authors";

export const dynamic = "force-dynamic";

export default async function NewPostPage() {
  const authors = await getAuthors();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-polibatam-navy">Create post</h1>
        <p className="text-sm text-gray-500">Compose a new article for the robotics blog.</p>
      </div>
      <PostForm mode="create" authors={authors} />
    </div>
  );
}
