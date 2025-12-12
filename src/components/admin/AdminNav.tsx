'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

const links = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/posts", label: "Posts" },
  { href: "/admin/authors", label: "Authors" },
  { href: "/admin/posts/new", label: "Create Post" },
  { href: "/admin/gallery", label: "Gallery" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-20 bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-semibold text-polibatam-navy">Admin Panel</span>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-polibatam-orange"
                    : "hover:text-polibatam-orange"
                }
              >
                {link.label}
              </Link>
            );
          })}
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="rounded-full border border-polibatam-orange px-4 py-1 text-polibatam-orange transition hover:bg-polibatam-orange hover:text-white"
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
}
