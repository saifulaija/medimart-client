'use client'

import assets from "@/app/assets";

// import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OtpSubmitForm from "./OtpSubmitForm";

import { useRouter } from "next/navigation";
import CountdownTimer from "./CountdownTimer";

// export const metadata: Metadata = {
//   title: "OTP | MediMart",
// };

export default function OtpPage() {
  const router = useRouter();

  const handleCountdownComplete = () => {
    router.push("/signup");
  };

  return (
    <main className="flex mx-auto items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold">Verify Your OTP</h1>
            <p className="text-gray-700">
              We've sent a One-Time Password (OTP) to your registered email
              address. Please enter the OTP below to verify your account and
              complete the signup process.
            </p>
           
            <CountdownTimer
              initialSeconds={59}
              onComplete={handleCountdownComplete}
            />
           
            <Link href="/signup" className="text-blue-600 hover:underline mt-4">
              Sign Up Again
            </Link>
          </div>
          <div className="space-y-5">
            <OtpSubmitForm />
          </div>
        </div>
        <Image
          src={assets.images.authSignUp}
          alt="login"
          className="hidden w-1/2 object-cover md:block object-center"
        />
      </div>
    </main>
  );
}
