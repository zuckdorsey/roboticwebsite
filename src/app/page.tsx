import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { galleryItems } from "@/data/gallery-data";
import dynamic from "next/dynamic";
import { getCurriculumCourses, groupCoursesBySemester } from "@/lib/curriculum";
import { getFacultyMembers } from "@/lib/faculty";
import { getAlumniStories } from "@/lib/alumni";


const CurriculumSection = dynamic(() => import("@/components/CurriculumSection"));
const GallerySection = dynamic(() => import("@/components/GallerySection"));
const FacultyMembersSection = dynamic(() => import("@/components/FacultyMembersSection"));
const StudentsSection = dynamic(() => import("@/components/StudentsSection"));
const AlumniSection = dynamic(() => import("@/components/AlumniSection"));
const BlogCarousel = dynamic(() => import("@/components/BlogCarousel"));
const JobOpportunitiesSection = dynamic(() => import("@/components/JobOpportunitiesSection"));

export default async function Home() {
  const [facultyMembers, alumniStories, curriculumCourses] = await Promise.all([
    getFacultyMembers(),
    getAlumniStories(),
    getCurriculumCourses(),
  ]);

  const curriculumSemesters = groupCoursesBySemester(curriculumCourses);

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
        <CurriculumSection
          title="Curriculum Structure"
          subtitle="Comprehensive 8-Semester Program"
          description="Our curriculum is designed to provide a solid foundation in robotics engineering technology, combining theoretical knowledge with practical skills."
          semesters={curriculumSemesters.map((semester) => ({
            semester: semester.semester,
            courses: semester.courses.map((course) => ({
              id: course.id,
              code: course.code,
              name: course.name,
              credits: course.credits,
              description: course.description,
              type: course.type === "elective" ? "elective" : "mandatory",
            })),
          }))}
        />
      </ScrollAnimation>

      <ScrollAnimation animation="scale-up" delay={0.2}>
        <GallerySection items={galleryItems} />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.2}>
        <FacultyMembersSection members={facultyMembers} />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-up" delay={0.2}>
        <AlumniSection
          title="Lorem Ipsum Dolor"
          description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          stories={alumniStories}
        />
      </ScrollAnimation>

      <ScrollAnimation animation="fade-in" delay={0.3}>
        <BlogCarousel />
      </ScrollAnimation>

      <Footer />
    </div>
  );
}
