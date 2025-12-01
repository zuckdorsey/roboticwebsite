import React from "react";

export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Polibatam Robotics",
        url: "https://robotics.polibatam.ac.id",
        logo: "https://robotics.polibatam.ac.id/logo.png", // Replace with actual logo URL
        sameAs: [
            "https://www.facebook.com/polibatam",
            "https://twitter.com/polibatam",
            "https://www.instagram.com/polibatam",
            "https://www.linkedin.com/school/politeknik-negeri-batam",
        ],
        address: {
            "@type": "PostalAddress",
            streetAddress: "Jl. Ahmad Yani, Tlk. Tering, Kec. Batam Kota",
            addressLocality: "Batam",
            addressRegion: "Kepulauan Riau",
            postalCode: "29461",
            addressCountry: "ID",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+62-778-469856",
            contactType: "customer service",
            areaServed: "ID",
            availableLanguage: ["en", "id"],
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
