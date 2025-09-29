import type { ReactNode } from 'react';

import { Logo } from '@/components/Logo';

export default function AuthRootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-black-primary flex-col flex md:flex-row items-center overflow-hidden">
      <div className="h-full md:h-screen md:w-[50vw] flex justify-start md:justify-center md:items-center">
        <Logo className="w-12 h-12 md:w-[300px] md:h-[300px] text-white-primary" />
      </div>

      <div>{children}</div>
    </main>
  );
}
