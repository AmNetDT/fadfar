import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { auth } from '@/auth';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import EmailSigninForm from './email-signin-form';
import GoogleSignInForm from './google-signin-form';
import Image from 'next/image';

export const metadata: Metadata = {
  title: `Sign In - ${APP_NAME}`,
};

export default async function SignIn({
  searchParams: { callbackUrl },
}: {
  searchParams: { callbackUrl: string };
}) {
  const session = await auth();

  if (session) {
    return redirect(callbackUrl || '/');
  }

  return (
    <div className="w-full text-center max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <CardTitle className="sm:text-lg md:text-xl flex flex-col items-center">
            <Link href="/">
              <Image
                src="/assets/icons/logo.jpg"
                width={70}
                height={70}
                alt={`${APP_NAME} logo`}
              />
            </Link>
            Welcome to {APP_NAME}
          </CardTitle>
          <CardDescription className="text-dark">
            Select a method to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <EmailSigninForm />
          <GoogleSignInForm />
          <div>
            <Link
              target="_self"
              className="link p-4 transition duration-150 text-center hover:text-orange-600"
              href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
