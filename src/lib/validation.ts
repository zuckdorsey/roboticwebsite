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

import { z } from "zod";

export const postInputSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(1).max(240).optional(),
  description: z.string().min(20).max(320),
  content: z.string().min(1),
  coverImage: z.string().url(),
  authorId: z.string().optional().nullable(),
});

export type PostInput = z.infer<typeof postInputSchema>;
