// Types untuk semua komponen

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
