import { NextRequest, NextResponse } from "next/server";
import { getAuthSession } from "@/lib/auth";
import { createFacultyMember, getFacultyMembers } from "@/lib/faculty";
import { facultyMemberInputSchema } from "@/lib/validation";

export async function GET() {
  const members = await getFacultyMembers();
  return NextResponse.json(members);
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

  const parsed = facultyMemberInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid data", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const member = await createFacultyMember(parsed.data);

  return NextResponse.json(member, { status: 201 });
}
