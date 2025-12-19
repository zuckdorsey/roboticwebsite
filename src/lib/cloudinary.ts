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

import { v2 as cloudinary, type UploadApiResponse, type UploadApiErrorResponse } from "cloudinary";

const {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_UPLOAD_FOLDER,
} = process.env;

if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_API_KEY || !CLOUDINARY_API_SECRET) {
  throw new Error(
    "Cloudinary environment variables (CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET) must be set"
  );
}

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export type CloudinaryUploadOptions = {
  folder?: string;
  resourceType?: "image" | "video" | "raw" | "auto";
  publicId?: string;
};

export async function uploadBufferToCloudinary(
  buffer: Buffer,
  options: CloudinaryUploadOptions = {}
): Promise<UploadApiResponse> {
  const folder = options.folder ?? CLOUDINARY_UPLOAD_FOLDER ?? "roboticwebsite";
  const resourceType = options.resourceType ?? "auto";

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: resourceType,
        public_id: options.publicId,
        use_filename: Boolean(options.publicId),
        unique_filename: !options.publicId,
        overwrite: false,
      },
      (error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
        if (error || !result) {
          reject(error ?? new Error("Failed to upload to Cloudinary"));
          return;
        }

        resolve(result);
      }
    );

    stream.end(buffer);
  });
}

export default cloudinary;
