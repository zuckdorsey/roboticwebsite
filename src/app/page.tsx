import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { facultyMembers } from "@/data/faculty-data";

import dynamic from 'next/dynamic';

const CurriculumSection = dynamic(() => import("@/components/CurriculumSection"));
const GallerySection = dynamic(() => import("@/components/GallerySection"));
const FacultyMembersSection = dynamic(() => import("@/components/FacultyMembersSection"));
const StudentsSection = dynamic(() => import("@/components/StudentsSection"));
const AlumniSection = dynamic(() => import("@/components/AlumniSection"));
const BlogCarousel = dynamic(() => import("@/components/BlogCarousel"));
const JobOpportunitiesSection = dynamic(() => import("@/components/JobOpportunitiesSection"));


export default function Home() {
  // Data untuk Curriculum
  const courses = [
    {
      title: "Introduction to Robotics",
      description: "Learn the fundamentals of robotics, including mechanical design, sensors, and actuators.",
      duration: "Semester 1-2"
    },
    {
      title: "Programming for Robotics",
      description: "Master programming languages like Python, C++, and ROS for robot control.",
      duration: "Semester 2-3"
    },
    {
      title: "Artificial Intelligence",
      description: "Explore AI and machine learning techniques for intelligent robot systems.",
      duration: "Semester 4-5"
    },
    {
      title: "Computer Vision",
      description: "Learn image processing and computer vision for robot perception.",
      duration: "Semester 5-6"
    },
    {
      title: "Robot Manipulation",
      description: "Study kinematics, dynamics, and control of robotic manipulators.",
      duration: "Semester 6-7"
    },
    {
      title: "Autonomous Systems",
      description: "Design and implement autonomous navigation and decision-making systems.",
      duration: "Semester 7-8"
    }
  ];

  return (
    <div className="min-h-screen bg-polibatam-light">
      <Navbar />

      <ScrollAnimation animation="fade-down">
        <HeroSection
          title="Learn Robotics Technology in Polibatam"
          subtitle="The First Robotics Study Program in Indonesia"
        />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.2}>
        <AboutSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.3}>
        <JobOpportunitiesSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.4}>
        <CurriculumSection />
      </ScrollAnimation>



      <ScrollAnimation animation="scale-up" delay={0.2}>
        <GallerySection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.2}>
        <FacultyMembersSection members={facultyMembers} />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.2}>
        <AlumniSection />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={0.3}>
        <BlogCarousel />
      </ScrollAnimation>

      <Footer />
    </div>
  );
}
