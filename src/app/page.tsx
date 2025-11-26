import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CurriculumSection from "@/components/CurriculumSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import FacultyMembersSection from "@/components/FacultyMembersSection";
import StudentsSection from "@/components/StudentsSection";
import AlumniSection from "@/components/AlumniSection";
import Footer from "@/components/Footer";
import { facultyMembers } from "@/data/faculty-data";

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

  // Data untuk Facilities
  const facilities = [
    {
      name: "Robotics Laboratory",
      description: "State-of-the-art lab equipped with industrial robots, 3D printers, and testing equipment."
    },
    {
      name: "AI Research Center",
      description: "Advanced computing facilities for artificial intelligence and machine learning research."
    },
    {
      name: "Prototyping Workshop",
      description: "Complete workshop with CNC machines, laser cutters, and electronic assembly stations."
    },
    {
      name: "Innovation Hub",
      description: "Collaborative space for students to work on innovative robotics projects and startups."
    }
  ];

  // Data untuk Students
  const students = [
    {
      name: "Andi Pratama",
      year: "2023",
      program: "Robotics Technology"
    },
    {
      name: "Bella Kusuma",
      year: "2022",
      program: "Robotics Technology"
    },
    {
      name: "Chairul Anwar",
      year: "2024",
      program: "Robotics Technology"
    }
  ];

  // Data untuk Alumni
  const alumni = [
    {
      name: "Dedi Setiawan",
      graduationYear: "2020",
      currentPosition: "Robotics Engineer",
      company: "Tech Robotics Indonesia"
    },
    {
      name: "Eka Fitriani",
      graduationYear: "2019",
      currentPosition: "AI Specialist",
      company: "Smart AI Solutions"
    },
    {
      name: "Fajar Ramadhan",
      graduationYear: "2021",
      currentPosition: "Automation Engineer",
      company: "Industrial Automation Corp"
    },
    {
      name: "Gina Marlina",
      graduationYear: "2018",
      currentPosition: "Research Scientist",
      company: "National Robotics Lab"
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
      
      <CurriculumSection />
      
      <FacilitiesSection facilities={facilities} />
      
      <FacultyMembersSection members={facultyMembers} />
      
      <StudentsSection 
        students={students}
        totalStudents={150}
      />
      
      <AlumniSection alumni={alumni} />
      
      <Footer />
    </div>
  );
}
