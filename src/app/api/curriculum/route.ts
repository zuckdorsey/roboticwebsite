import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { createCurriculumCourse, getCurriculumCourses } from "@/lib/curriculum";
import { curriculumCourseInputSchema } from "@/lib/validation";

export async function GET() {
  const courses = await getCurriculumCourses();
  return NextResponse.json(courses);
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

  const parsed = curriculumCourseInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const course = await createCurriculumCourse(parsed.data);

  return NextResponse.json(course, { status: 201 });
}
