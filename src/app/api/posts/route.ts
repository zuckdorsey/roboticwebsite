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
import { createPost, getPaginatedPosts } from "@/lib/posts";
import { postInputSchema } from "@/lib/validation";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "10");

  const currentPage = Number.isFinite(page) && page > 0 ? page : 1;
  const pageSize = Number.isFinite(limit) && limit > 0 && limit <= 50 ? limit : 10;

  const result = await getPaginatedPosts(currentPage, pageSize);

  return NextResponse.json(result);
}

export async function POST(request: NextRequest) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const parsed = postInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const post = await createPost(parsed.data);

  return NextResponse.json(post, { status: 201 });
}
