import { NextRequest, NextResponse } from "next/server";
import { getLatestPosts } from "@/lib/posts";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limitParam = Number(searchParams.get("limit") ?? "5");
  const limit = Number.isFinite(limitParam) && limitParam > 0 && limitParam <= 20 ? limitParam : 5;

  const posts = await getLatestPosts(limit);

  return NextResponse.json(posts);
}
