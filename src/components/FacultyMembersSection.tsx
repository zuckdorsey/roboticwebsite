'use client';;
import { useState, useEffect } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { FacultyMember } from "@/types";
import { Button } from '@heroui/react';
import FacultyCard from './FacultyCard';
import Link from 'next/link';

interface FacultyMembersSectionProps {
  members: FacultyMember[];
}



export default function FacultyMembersSection({ members }: FacultyMembersSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleMembers = members.slice(0, visibleCount);

  return (
    <>
      <section id="faculty" className="py-20 bg-linear-to-b from-white via-polibatam-light/30 to-white relative overflow-hidden">
        <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            {/* Top Label: peach soft-gradient with clean rounded pill */}
            <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-linear-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm">
              <HiUserGroup className="w-5 h-5 text-polibatam-orange" />
              <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                Our Team
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
              Faculty Members
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet our dedicated team of educators and researchers driving innovation in robotics technology
            </p>
          </div>

          {/* Faculty Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {visibleMembers.map((member, index) => (
              <FacultyCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            {isMobile ? (
              <Link href="/faculty">
                <Button
                  className="bg-polibatam-orange text-white font-bold shadow-lg hover:scale-105 transition-transform"
                  radius="full"
                  size="lg"
                >
                  Load More
                </Button>
              </Link>
            ) : (
              visibleCount < members.length && (
                <Button
                  onPress={handleLoadMore}
                  className="bg-polibatam-orange text-white font-bold shadow-lg hover:scale-105 transition-transform"
                  radius="full"
                  size="lg"
                >
                  Load More
                </Button>
              )
            )}
          </div>
        </div>
      </section>

    </>
  );
}
