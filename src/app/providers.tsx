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

'use client';

import { HeroUIProvider } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <SessionProvider>
      <HeroUIProvider 
        navigate={router.push}
        locale="en-US"
      >
        {children}
      </HeroUIProvider>
    </SessionProvider>
  );
}
