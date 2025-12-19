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

export interface Course {
  title: string;
  description: string;
  duration?: string;
}

export interface Facility {
  name: string;
  description: string;
  image?: string;
}

export interface FacultyMember {
  name: string;
  position: string;
  expertise: string;
  image?: string;
  photo?: string;
  role?: string;
  title?: string;
  nidn?: string;
  email?: string;
  education?: string[];
  specialization?: string;
  social?: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    googleScholar?: string;
    sinta?: string;
  };
}

export interface Student {
  name: string;
  year: string;
  program: string;
}

export interface Alumni {
  name: string;
  graduationYear: string;
  currentPosition: string;
  company?: string;
}

export interface MenuItem {
  label: string;
  href: string;
}

export interface AboutHighlight {
  title: string;
  value: string;
  description: string;
}

export interface AboutContent {
  title: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
}
