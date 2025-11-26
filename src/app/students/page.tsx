import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentSpreadsheetTable from "@/components/StudentSpreadsheetTable";
import { HiUserGroup } from "react-icons/hi";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-32 pb-16">
        <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-polibatam-orange/10 rounded-full border border-polibatam-orange/20">
              <HiUserGroup className="w-5 h-5 text-polibatam-orange" />
              <span className="text-sm font-bold text-polibatam-orange uppercase tracking-wide">
                Student Directory
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-polibatam-navy">
                Students
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Browse our current student and connect with the future innovators of robotics technology.
            </p>
          </div>

          {/* Spreadsheet Table Component */}
          <StudentSpreadsheetTable />
        </div>
      </main>

      <Footer />
    </div>
  );
}
