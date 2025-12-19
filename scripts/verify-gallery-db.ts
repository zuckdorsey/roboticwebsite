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

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Connecting to database...');
        const images = await prisma.galleryImage.findMany();
        console.log('Successfully fetched gallery images:', images);
    } catch (error) {
        console.error('Error fetching gallery images:', error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
