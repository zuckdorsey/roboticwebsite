import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { curriculumCourseInputSchema } from "@/lib/validation";
import {
  deleteCurriculumCourse,
  getCurriculumCourseById,
  updateCurriculumCourse,
} from "@/lib/curriculum";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const course = await getCurriculumCourseById(id);

  if (!course) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(course);
}

export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getCurriculumCourseById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
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

  const updated = await updateCurriculumCourse(id, parsed.data);

  return NextResponse.json(updated);
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const session = await getAuthSession();

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id } = await context.params;
  const existing = await getCurriculumCourseById(id);

  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  await deleteCurriculumCourse(id);

  return new NextResponse(null, { status: 204 });
}
