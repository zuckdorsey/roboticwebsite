'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiUserGroup, HiMail, HiAcademicCap, HiSparkles, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FacultyMember } from "@/types";
import { Link } from '@heroui/react';

interface FacultyCardProps {
    member: FacultyMember;
    index: number;
}

export default function FacultyCard({ member, index }: FacultyCardProps) {
    const [isEducationExpanded, setIsEducationExpanded] = useState(false);

    return (
        <div className="group h-full">
            <div className="h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Image & Header */}
                <div className="relative">
                    {/* Gradient Header */}
                    <div className="h-24 bg-gradient-to-br from-polibatam-navy via-polibatam-navy to-slate-800 relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-polibatam-orange rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-polibatam-peach rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                        </div>

                        {/* Social Links */}
                        {member.social && (
                            <div className="absolute top-3 right-3 flex gap-2 z-10">
                                {member.social.linkedin && (
                                    <Link
                                        href={member.social.linkedin}
                                        isExternal
                                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                                    >
                                        <FaLinkedin className="w-4 h-4" />
                                    </Link>
                                )}
                                {member.social.instagram && (
                                    <Link
                                        href={member.social.instagram}
                                        isExternal
                                        className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
                                    >
                                        <FaInstagram className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Profile Photo */}
                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 z-10">
                        <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-lg border border-gray-100">
                            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-50">
                                {member.photo ? (
                                    <Image
                                        src={member.photo}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="96px"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-polibatam-light">
                                        <HiUserGroup className="w-10 h-10 text-gray-300" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="pt-16 pb-5 px-5">
                    {/* Name & Role */}
                    <div className="text-center mb-5">
                        <h3 className="text-lg font-bold text-polibatam-navy mb-1 leading-tight">
                            {member.name}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-polibatam-orange/10 text-polibatam-orange text-xs font-semibold rounded-full">
                            {member.role}
                        </span>
                    </div>

                    {/* Info Grid */}
                    <div className="space-y-4">
                        {/* Education */}
                        {member.education && member.education.length > 0 && (
                            <div className="bg-slate-50 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <HiAcademicCap className="w-4 h-4 text-polibatam-orange" />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Education</span>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {member.education[0]}
                                    </p>
                                    {isEducationExpanded && member.education.slice(1).map((edu, idx) => (
                                        <p key={idx} className="text-sm text-gray-700 leading-relaxed pt-2 border-t border-dashed border-gray-200">
                                            {edu}
                                        </p>
                                    ))}
                                </div>
                                {member.education.length > 1 && (
                                    <button
                                        onClick={() => setIsEducationExpanded(!isEducationExpanded)}
                                        className="flex items-center gap-1 text-xs text-polibatam-orange mt-2 font-semibold hover:text-polibatam-navy transition-colors"
                                    >
                                        {isEducationExpanded ? (
                                            <>Show Less <HiChevronUp className="w-3 h-3" /></>
                                        ) : (
                                            <>+{member.education.length - 1} More <HiChevronDown className="w-3 h-3" /></>
                                        )}
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Expertise */}
                        {member.specialization && (
                            <div>
                                <div className="flex items-center gap-2 mb-2">
                                    <HiSparkles className="w-4 h-4 text-polibatam-navy" />
                                    <span className="text-xs font-bold text-gray-500 uppercase">Expertise</span>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                    {member.specialization.split(',').slice(0, 3).map((spec, i) => (
                                        <span key={i} className="px-2.5 py-1 bg-white border border-gray-200 text-gray-600 text-xs rounded-lg">
                                            {spec.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {member.email && (
                        <div className="mt-5 pt-4 border-t border-gray-100">
                            <a
                                href={`mailto:${member.email}`}
                                className="flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-polibatam-orange transition-colors group/mail"
                            >
                                <HiMail className="w-4 h-4 group-hover/mail:scale-110 transition-transform" />
                                <span className="truncate">{member.email}</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
