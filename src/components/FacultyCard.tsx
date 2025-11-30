'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiUserGroup, HiMail, HiAcademicCap, HiSparkles, HiIdentification } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaLinkedin, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { FacultyMember } from "@/types";
import { Card, CardBody, Link, Chip } from '@heroui/react';

interface FacultyCardProps {
    member: FacultyMember;
    index: number;
}

export default function FacultyCard({ member, index }: FacultyCardProps) {
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);

    return (
        <div className="h-full">
            <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-visible group">
                <CardBody className="p-0 flex flex-col h-full">
                    {/* Header Section with Gradient & Photo */}
                    <div className="relative h-32 bg-linear-to-r from-polibatam-navy to-polibatam-navy/90 rounded-t-3xl overflow-hidden">
                        {/* Decorative Patterns */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-polibatam-orange/10 rounded-full -ml-8 -mb-8" />

                        {/* Social Links (Absolute Top Right) */}
                        {member.social && (
                            <div className="absolute top-4 right-4 flex gap-2 z-10">
                                {member.social.linkedin && (
                                    <Link
                                        href={member.social.linkedin}
                                        isExternal
                                        className="text-white/70 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <FaLinkedin className="w-5 h-5" />
                                    </Link>
                                )}
                                {member.social.instagram && (
                                    <Link
                                        href={member.social.instagram}
                                        isExternal
                                        className="text-white/70 hover:text-white hover:scale-110 transition-all"
                                    >
                                        <FaInstagram className="w-5 h-5" />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Profile Photo - Overlapping */}
                    <div className="px-6 -mt-16 mb-4 relative z-10">
                        <div className="w-32 h-32 rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-gray-100 mx-auto md:mx-0">
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50">
                                {member.photo ? (
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 128px, 128px"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-polibatam-light">
                                        <HiUserGroup className="w-12 h-12 text-gray-300" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="px-6 pb-6 flex-1 flex flex-col">
                        {/* Name & Role */}
                        <div className="mb-6 text-center md:text-left">
                            <h3 className="text-xl font-bold text-polibatam-navy mb-1 leading-tight">
                                {member.name}
                            </h3>
                            <p className="text-polibatam-orange font-medium text-sm">
                                {member.role}
                            </p>
                        </div>

                        {/* Details List */}
                        <div className="space-y-4 flex-1">
                            {/* Education */}
                            {member.education && member.education.length > 0 && (
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 rounded-lg bg-polibatam-peach/20 flex items-center justify-center shrink-0 mt-0.5">
                                        <HiAcademicCap className="w-4 h-4 text-polibatam-orange" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Education</p>

                                        <div className="space-y-2">
                                            {/* First Item - Always Visible */}
                                            <p className="text-sm text-gray-700 leading-snug">
                                                {member.education[0]}
                                            </p>

                                            {/* Expanded Items */}
                                            {isEducationExpanded && member.education.slice(1).map((edu, idx) => (
                                                <p key={idx} className="text-sm text-gray-700 leading-snug pt-2 border-t border-dashed border-gray-100 animate-appearance-in">
                                                    {edu}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Toggle Button */}
                                        {member.education.length > 1 && (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsEducationExpanded(!isEducationExpanded);
                                                }}
                                                className="flex items-center gap-1 text-xs text-polibatam-orange mt-2 font-bold hover:text-polibatam-navy transition-colors focus:outline-none"
                                            >
                                                {isEducationExpanded ? (
                                                    <>Show Less <FaChevronUp className="w-2.5 h-2.5" /></>
                                                ) : (
                                                    <>Read More <FaChevronDown className="w-2.5 h-2.5" /></>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Specialization */}
                            {member.specialization && (
                                <div className="flex gap-3 items-start">
                                    <div className="w-8 h-8 rounded-lg bg-polibatam-light flex items-center justify-center shrink-0 mt-0.5">
                                        <HiSparkles className="w-4 h-4 text-polibatam-navy" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Expertise</p>
                                        <div className="flex flex-wrap gap-1">
                                            {member.specialization.split(',').slice(0, 3).map((spec, i) => (
                                                <span key={i} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">
                                                    {spec.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Footer / Contact */}
                        <div className="mt-6 pt-4 border-t border-gray-100 grid grid-cols-1 gap-2">
                            {member.email && (
                                <div className="flex items-center gap-2 text-sm text-gray-600 hover:text-polibatam-orange transition-colors group/link">
                                    <HiMail className="w-4 h-4 text-gray-400 group-hover/link:text-polibatam-orange" />
                                    <a href={`mailto:${member.email}`} className="truncate">
                                        {member.email}
                                    </a>
                                </div>
                            )}
                            {member.nidn && (
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <HiIdentification className="w-4 h-4 text-gray-400" />
                                    <span>NIDN: {member.nidn}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}
