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

import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://robotics.polibatam.ac.id"; // Replace with actual domain

    // Static routes
    const routes = [
        "",
        "/faculty",
        "/students",
        "/facilities",
        "/curriculum",
        "/gallery",
        "/alumni",
        "/contact",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
