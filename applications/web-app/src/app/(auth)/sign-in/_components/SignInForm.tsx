'use client';

import { Button } from '@/components/Button';
import { Devider } from '@/components/Devider';

import { IconApple } from '@/components/icons/Apple';
import { TermsAndConditions } from './TermsAndConditions';

// TODO: Split methods up in differnt components to handle logic separately
export const SignInForm = () => {
  return (
    <div>
      <h2 className="mb-6">Nu registreren</h2>

      <div className="flex flex-col w-full max-w-[420px] gap-4">
        <Button className="py-3">Inloggen</Button>
        <Button className="py-3 flex items-center justify-center gap-1">
          <IconApple className="w-5 h-auto" />
          <span>Registreren met Apple</span>
        </Button>

        <Devider text="OF" />

        <Button className="py-3">Account aanmaken</Button>
      </div>

      <TermsAndConditions />
    </div>
  );
};
