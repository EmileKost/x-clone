import { AuthHeader } from './_components/AuthHeader';
import { SignInForm } from './_components/SignInForm';

export default function SignInPage() {
  return (
    <div className="p-5">
      <AuthHeader title="Wat er nu gebeurt" />
      <SignInForm />
    </div>
  );
}
