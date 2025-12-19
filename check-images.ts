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
    const posts = await prisma.post.findMany({
        select: {
            title: true,
            coverImage: true,
        },
    });

    console.log('Posts and their cover images:');
    posts.forEach((post) => {
        console.log(`Title: ${post.title}, Cover Image: ${post.coverImage}`);
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
