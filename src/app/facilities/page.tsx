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

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";

export default function FacilitiesPage() {
    return (
        <div className="min-h-screen bg-polibatam-light">
            <Navbar />
            <div className="pt-24 pb-12">
                <div className="max-w-[1720px] mx-auto px-4 md:px-8 lg:px-12">
                    <h1 className="text-4xl md:text-5xl font-black text-polibatam-navy mb-8 text-center">
                        All Facilities
                    </h1>
                </div>
                <GallerySection />
            </div>
            <Footer />
        </div>
    );
}
