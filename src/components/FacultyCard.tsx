'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { HiUserGroup, HiMail, HiAcademicCap } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FacultyMember } from "@/types";
import { Card, CardBody, Avatar, Link, Button, Chip } from '@heroui/react';

interface FacultyCardProps {
    member: FacultyMember;
    index: number;
}

export default function FacultyCard({ member, index }: FacultyCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();

        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardStyles = [
        {
            gradient: 'from-polibatam-light/80 to-polibatam-peach/40',
            accentColor: 'polibatam-orange',
            ring: 'ring-polibatam-orange/30',
            bgColor: 'bg-polibatam-orange',
            textColor: 'text-polibatam-orange',
            iconColor: 'text-polibatam-orange',
            hoverBg: 'hover:bg-polibatam-orange'
        },
        {
            gradient: 'from-polibatam-peach/60 to-white',
            accentColor: 'polibatam-navy',
            ring: 'ring-polibatam-navy/30',
            bgColor: 'bg-polibatam-navy',
            textColor: 'text-polibatam-navy',
            iconColor: 'text-polibatam-navy',
            hoverBg: 'hover:bg-polibatam-navy'
        },
        {
            gradient: 'from-white to-polibatam-light/60',
            accentColor: 'polibatam-orange',
            ring: 'ring-polibatam-orange/40',
            bgColor: 'bg-polibatam-orange',
            textColor: 'text-polibatam-orange',
            iconColor: 'text-polibatam-orange',
            hoverBg: 'hover:bg-polibatam-orange'
        },
        {
            gradient: 'from-polibatam-circle/40 to-polibatam-peach/30',
            accentColor: 'polibatam-navy',
            ring: 'ring-polibatam-navy/40',
            bgColor: 'bg-polibatam-navy',
            textColor: 'text-polibatam-navy',
            iconColor: 'text-polibatam-navy',
            hoverBg: 'hover:bg-polibatam-navy'
        },
    ];

    const currentStyle = cardStyles[index % cardStyles.length];

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsFlipped(true);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsFlipped(false);
        }
    };

    const handleButtonClick = () => {
        if (isMobile) {
            setIsFlipped(!isFlipped);
        }
    };

    return (
        <div
            className="perspective-1000 h-[480px] group cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`relative w-full h-full transition-all duration-600 ease-out transform-style-3d ${isFlipped ? 'rotate-y-180' : ''
                    }`}
            >
                {/* Front Side - Simple & Clean */}
                <Card className={`absolute inset-0 backface-hidden bg-linear-to-br ${currentStyle.gradient} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-polibatam-orange/20`}>
                    {/* Simple decorative corner */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-polibatam-orange/5 rounded-bl-full"></div>

                    <CardBody className="relative flex flex-col items-center justify-center h-full p-6">
                        {/* Photo - Simple & Clean */}
                        <div className={`relative mb-5 ring-2 ${currentStyle.ring} shadow-md transform group-hover:scale-105 transition-transform duration-300 rounded-2xl overflow-hidden w-32 h-32 bg-white`}>
                            {member.photo ? (
                                <Image
                                    src={member.photo}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 128px, 128px"
                                />
                            ) : (
                                <div className={`w-full h-full flex items-center justify-center bg-linear-to-br from-polibatam-orange/20 to-polibatam-navy/20 ${currentStyle.iconColor}`}>
                                    <HiUserGroup className="w-16 h-16" />
                                </div>
                            )}
                        </div>

                        {/* Info - Compact */}
                        <h3 className="text-xl font-bold text-polibatam-navy mb-1 text-center leading-tight">
                            {member.name}
                        </h3>

                        {member.role && (
                            <Chip
                                className={`text-xs font-semibold ${currentStyle.textColor} mb-3`}
                                size="sm"
                                variant="flat"
                            >
                                {member.role}
                            </Chip>
                        )}

                        {/* Social Icons - Minimal */}
                        {member.social && (
                            <div className="flex gap-2 mb-4">
                                {member.social.twitter && (
                                    <Link
                                        href={member.social.twitter}
                                        isExternal
                                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/60 hover:bg-polibatam-navy hover:text-white transition-all duration-300 shadow-sm hover:scale-110"
                                    >
                                        <FaTwitter className="w-4 h-4" />
                                    </Link>
                                )}
                                {member.social.instagram && (
                                    <Link
                                        href={member.social.instagram}
                                        isExternal
                                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/60 hover:bg-polibatam-orange hover:text-white transition-all duration-300 shadow-sm hover:scale-110"
                                    >
                                        <FaInstagram className="w-4 h-4" />
                                    </Link>
                                )}
                                {member.social.linkedin && (
                                    <Link
                                        href={member.social.linkedin}
                                        isExternal
                                        className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/60 hover:bg-polibatam-navy hover:text-white transition-all duration-300 shadow-sm hover:scale-110"
                                    >
                                        <FaLinkedin className="w-4 h-4" />
                                    </Link>
                                )}
                            </div>
                        )}

                        {/* Mobile Button - Compact */}
                        <Button
                            onPress={handleButtonClick}
                            className={`lg:hidden px-6 py-2 ${currentStyle.bgColor} text-white rounded-xl text-xs font-bold shadow-md transition-all duration-300`}
                            size="sm"
                        >
                            View Details
                        </Button>

                        {/* Desktop hint - Minimal */}
                        <p className="hidden lg:block text-xs text-polibatam-navy/40 mt-2">
                            Hover for details
                        </p>
                    </CardBody>
                </Card>

                {/* Back Side - Compact, No Scroll Needed */}
                <Card className="absolute inset-0 backface-hidden bg-white rounded-3xl shadow-xl overflow-hidden rotate-y-180 border border-polibatam-orange/20">
                    {/* Compact Header */}
                    <div className={`h-16 ${currentStyle.bgColor} flex items-center justify-center`}>
                        <h4 className="text-white font-bold text-sm tracking-wide">PROFILE DETAILS</h4>
                    </div>

                    {/* Content - Fit without scroll */}
                    <div className="p-5 h-[calc(100%-4rem)] flex flex-col justify-between overflow-y-auto custom-scrollbar">
                        {/* Top Section */}
                        <div className="space-y-3">
                            {/* Name */}
                            <div className="text-center pb-3 border-b border-polibatam-light">
                                <h3 className="text-lg font-bold text-polibatam-navy mb-0.5">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-polibatam-orange font-semibold">{member.role}</p>
                            </div>

                            {/* Compact Contact */}
                            <div className="space-y-2">
                                {member.nidn && (
                                    <div className="flex items-center gap-2 text-xs bg-polibatam-light/50 rounded-lg p-2">
                                        <HiAcademicCap className={`w-4 h-4 ${currentStyle.iconColor} shrink-0`} />
                                        <div className="flex-1 min-w-0">
                                            <span className="font-bold text-polibatam-navy">NIDN: </span>
                                            <span className="text-gray-700">{member.nidn}</span>
                                        </div>
                                    </div>
                                )}
                                {member.email && (
                                    <div className="flex items-center gap-2 text-xs bg-polibatam-light/50 rounded-lg p-2">
                                        <HiMail className={`w-4 h-4 ${currentStyle.iconColor} shrink-0`} />
                                        <Link
                                            href={`mailto:${member.email}`}
                                            className="text-gray-700 hover:text-polibatam-orange transition-colors truncate text-xs"
                                        >
                                            {member.email}
                                        </Link>
                                    </div>
                                )}
                            </div>

                            {/* Compact Education - Show only highest */}
                            {member.education && member.education.length > 0 && (
                                <div className="bg-polibatam-peach/30 rounded-lg p-3">
                                    <p className="text-xs font-bold text-polibatam-navy mb-1">Education</p>
                                    <p className="text-xs text-polibatam-navy/80 leading-snug">
                                        {member.education[0]}
                                    </p>
                                    {member.education.length > 1 && (
                                        <p className="text-xs text-polibatam-orange mt-1">+{member.education.length - 1} more</p>
                                    )}
                                </div>
                            )}

                            {/* Compact Specialization */}
                            {member.specialization && (
                                <div className="bg-polibatam-light/50 rounded-lg p-3">
                                    <p className="text-xs font-bold text-polibatam-navy mb-1">Specialization</p>
                                    <p className="text-xs text-polibatam-navy/80 leading-snug">{member.specialization}</p>
                                </div>
                            )}
                        </div>

                        {/* Bottom Section */}
                        <div>
                            {/* Mobile Back Button */}
                            <Button
                                onPress={handleButtonClick}
                                className="lg:hidden w-full py-2 bg-polibatam-circle/60 hover:bg-polibatam-peach text-polibatam-navy rounded-lg text-xs font-bold transition-all duration-300"
                                size="sm"
                            >
                                ← Back
                            </Button>

                            {/* Desktop hint */}
                            <p className="hidden lg:block text-center text-xs text-polibatam-navy/40">
                                Hover away to return
                            </p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
