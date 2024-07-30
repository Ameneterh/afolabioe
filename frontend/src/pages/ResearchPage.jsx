import React from "react";
import heroImage from "/researcher_header.jpg";
import { Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Button } from "flowbite-react";
import { GrDocumentPdf } from "react-icons/gr";
import Divider from "../components/Divider";

export default function About() {
  return (
    <MainLayout>
      <div className="w-full min-h-screen">
        <div
          className="w-full h-[400px] bg-cover bg-no-repeat flex flex-col items-center justify-center px-4 md:px-20 text-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <p className="text-4xl font-extrabold dark:text-gray-900">
            RESEARCH INTERESTS
          </p>
        </div>
        <div className="flex flex-col gap-6 max-w-6xl md:mx-auto bg-white md:mt-[-50px] md:rounded-t-2xl p-4 md:p-10"></div>
      </div>
    </MainLayout>
  );
}
