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

import { withAuth } from "next-auth/middleware";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(_req: NextRequest) {
    return;
  },
  {
    callbacks: {
      authorized: ({ token, req }: { token: unknown; req: NextRequest }) => {
        const path = req.nextUrl.pathname;
        if (path.startsWith("/admin/login")) {
          return true;
        }
        return Boolean(token);
      },
    },
    pages: {
      signIn: "/admin/login",
    },
  }
);

export const config = {
  matcher: ["/admin/:path*"],
};
