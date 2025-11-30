import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import GallerySection, { GalleryItem } from "@/components/GallerySection";
import FacultyMembersSection from "@/components/FacultyMembersSection";
import StudentsSection from "@/components/StudentsSection";
import AlumniSection from "@/components/AlumniSection";
import BlogCarousel from "@/components/BlogCarousel";
import JobOpportunitiesSection from "@/components/JobOpportunitiesSection";
import Footer from "@/components/Footer";
import { facultyMembers } from "@/data/faculty-data";
import { galleryItems } from "@/data/gallery-data";

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

      <HeroSection
        title="Learn Robotics Technology in Polibatam"
        subtitle="The First Robotics Study Program in Indonesia"
      />

      <AboutSection />

      <JobOpportunitiesSection />

      <CurriculumSection />



      <GallerySection items={galleryItems} />

      <FacultyMembersSection members={facultyMembers} />



      <AlumniSection />

      <BlogCarousel />



      <Footer />
    </div>
  );
}
