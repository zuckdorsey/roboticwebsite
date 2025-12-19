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

import { facultyMembers } from '@/data/faculty-data';
import FacultyCard from '@/components/FacultyCard';
import { HiUserGroup } from 'react-icons/hi';
import { Button } from '@heroui/react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FacultyPage() {
    return (
        <div className="min-h-screen bg-polibatam-light">
            <Navbar />
            <main className="bg-linear-to-b from-white via-polibatam-light/30 to-white">
                <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-20 relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-5 py-2.5 bg-linear-to-r from-polibatam-peach/20 via-polibatam-orange/15 to-polibatam-peach/20 rounded-full border border-polibatam-peach/30 shadow-sm backdrop-blur-sm">
                            <HiUserGroup className="w-5 h-5 text-polibatam-orange" />
                            <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                                Our Team
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
                            All Faculty Members
                        </h1>

                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Meet our dedicated team of educators and researchers driving innovation in robotics technology
                        </p>

                        <Link href="/">
                            <Button
                                className="bg-polibatam-navy text-white font-bold shadow-lg hover:scale-105 transition-transform"
                                radius="full"
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </div>

                    {/* Faculty Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {facultyMembers.map((member, index) => (
                            <FacultyCard key={index} member={member} index={index} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
