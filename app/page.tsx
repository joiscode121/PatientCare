import Image from "next/image";
import { Button } from "@/components/ui/button";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen items-center justify-center">
      {/* ToDO: Add OTP Verification | Passkey Modal  */}
      <section className="remove-scrollbar container flex flex-col items-center">
        <div className="text-center mb-8">
          <Image
            src="/assets/icons/logo-full.svg"
            height={100}
            width={200}
            alt="CarePulse logo"
            className="h-auto w-auto"
          />
        </div>
        <PatientForm />

        {/* Increased bottom margin to prevent text from being cut off */}
        <p className="text-14-regular text-dark-600 mt-8 mb-4">
          © 2024 CarePulse
        </p>

        {/* Positioned admin link to the right */}
        <div className="w-full flex justify-end mt-[-36px]">
          <Link href="/?admin=true" className="text-14-regular text-green-500">
            <span>Admin</span>
          </Link>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
}
