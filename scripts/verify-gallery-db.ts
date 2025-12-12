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
