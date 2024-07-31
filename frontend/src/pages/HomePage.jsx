import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto py-10 flex flex-col md:flex-row gap-4 items-center">
        <div>
          <img
            src="/headshot.png"
            alt="afolabi oe"
            className="w-96 rounded-tl-[200px] rounded-bl-[200px]"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-center flex-1">
          <h1 className="text-4xl font-extrabold">
            AFOLABI, Oluwatoyin Elizabeth
          </h1>
          <p>
            <i>[B. Pharm, M. Clinical Pharm & Admin, MPSN, MCIPSMN, MIFPSM]</i>
          </p>
          <p className="mt-3">
            Pharmacist, Researcher, Teacher, Procurement Specialist
          </p>

          <div className="mt-4 flex items-center gap-4">
            <Button as="div" className="rounded-full">
              <Link to="/contact-me">Contact Me</Link>
            </Button>

            <Button gradientDuoTone="greenToBlue" className="rounded-full">
              <Link
                to="/about-me"
                className="rounded-full outline-2 outline-gray-800"
              >
                About Pharm Afolabi O.E.
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
