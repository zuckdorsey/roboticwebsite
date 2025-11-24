'use client';

import { Card, Avatar } from 'flowbite-react';
import { HiUserGroup } from 'react-icons/hi';
import { FacultyMember } from "@/types";

interface FacultyMembersSectionProps {
  members: FacultyMember[];
}

export default function FacultyMembersSection({ members }: FacultyMembersSectionProps) {
  return (
    <section id="faculty" className="py-16 bg-polibatam-light">
      <div className="max-w-[1720px] mx-auto px-8 md:px-10 lg:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          <HiUserGroup className="inline-block mr-2 h-10 w-10 text-polibatam-orange" />
          Faculty Members
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {members.map((member, index) => (
            <Card key={index} className="max-w-sm">
              <div className="flex flex-col items-center pb-10">
                <Avatar
                  img=""
                  rounded
                  size="lg"
                  className="mb-3"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white text-center">
                  {member.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {member.position}
                </span>
                <span className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  {member.expertise}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
