import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { createAlumniStory, getAlumniStories } from "@/lib/alumni";
import { alumniStoryInputSchema } from "@/lib/validation";

export async function GET() {
  const stories = await getAlumniStories();
  return NextResponse.json(stories);
}

export async function POST(request: NextRequest) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ message: "Invalid JSON" }, { status: 400 });
  }

  const parsed = alumniStoryInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const story = await createAlumniStory(parsed.data);

  return NextResponse.json(story, { status: 201 });
}
