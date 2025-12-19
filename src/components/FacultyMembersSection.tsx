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

'use client';

import { useState, useEffect } from 'react';
import { HiUserGroup, HiArrowRight } from 'react-icons/hi';
import { FacultyMember } from "@/types";
import FacultyCard from './FacultyCard';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      setVisibleCount(mobile ? 2 : 3);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const visibleMembers = members.slice(0, visibleCount);
  const hasMore = visibleCount < members.length;

  return (
    <section id="faculty" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-polibatam-peach/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-polibatam-navy/5 to-transparent rounded-full blur-3xl translate-y-1/3 translate-x-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-polibatam-orange/10 rounded-full border border-polibatam-orange/20 mb-4">
            <HiUserGroup className="w-4 h-4 text-polibatam-orange" />
            <span className="text-sm font-semibold text-polibatam-orange">Tim Dosen</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-polibatam-navy">
            Faculty Members
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Tim dosen berpengalaman yang siap membimbing mahasiswa dalam mengembangkan keahlian di bidang robotika
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {visibleMembers.map((member, index) => (
            <motion.div
              key={member.name || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <FacultyCard member={member} index={index} />
            </motion.div>
          ))}
        </div>

        {/* Load More / View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 flex justify-center"
        >
          {isMobile ? (
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-polibatam-orange to-polibatam-peach text-white font-semibold rounded-xl shadow-lg shadow-polibatam-orange/20 hover:shadow-xl transition-all"
            >
              View All Faculty
              <HiArrowRight className="w-4 h-4" />
            </Link>
          ) : hasMore ? (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-polibatam-navy font-semibold rounded-xl border border-gray-200 hover:border-polibatam-orange hover:text-polibatam-orange shadow-sm hover:shadow-md transition-all"
            >
              Tampilkan Lebih Banyak
              <span className="text-xs bg-polibatam-orange/10 text-polibatam-orange px-2 py-0.5 rounded-full">
                +{members.length - visibleCount}
              </span>
            </button>
          ) : (
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 text-polibatam-navy font-semibold hover:text-polibatam-orange transition-colors"
            >
              View All on Faculty Page
              <HiArrowRight className="w-4 h-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
