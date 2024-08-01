import React from "react";
import MainLayout from "../layout/MainLayout";
import { Button, Textarea, TextInput } from "flowbite-react";
import { MdMarkEmailUnread, MdAddCall } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto p-2 md:py-8 flex flex-col md:flex-row mb-5 md:mb-10 items-center">
        <div className="flex-1">
          <img
            src="/headshot.png"
            alt="afolabi oe"
            className="w-96 rounded-tl-[200px] rounded-bl-[200px]"
          />
        </div>
        <div className="flex flex-col flex-1 p-3 md:gap-8 w-full">
          <p className="capitalize text-3xl font-bold md:text-6xl md:font-bold">
            Let's Connect
          </p>
          <div className="flex items-center justify-center gap-5 border-2 border-slate-200 rounded-xl p-2">
            <Link
              to="mailto:toyinafola@yahoo.com"
              className="flex gap-1 items-center text-blue-600 hover:underline underline-offset-2"
            >
              <MdMarkEmailUnread className="text-2xl text-slate-600" /> Private
            </Link>
            <Link
              to="mailto:afolabioe@abuad.edu.ng"
              className="flex gap-1 items-center text-blue-600 hover:underline underline-offset-2"
            >
              <MdMarkEmailUnread className="text-2xl text-slate-600" /> Official
            </Link>
            <Link
              to="https://wa.me/+2348039524453"
              className="flex gap-1 items-center text-blue-600 hover:underline underline-offset-2"
            >
              <FaWhatsappSquare className="text-2xl text-green-800" /> WhatsApp
            </Link>
            <Link
              to="tel:+2348039524453"
              className="flex gap-1 items-center text-blue-600 hover:underline underline-offset-2"
            >
              <MdAddCall className="text-2xl text-blue-800" /> Call
            </Link>
          </div>
          <form
            onSubmit={(ev) => ev.target.reset()}
            target="_blank"
            className="flex flex-col gap-4 w-full"
            action="https://formsubmit.co/clcthehouseofglory1@gmail.com"
            method="POST"
          >
            <TextInput
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Your Full Name"
            />
            <TextInput
              type="email"
              id="email"
              name="email"
              placeholder="youremail@company.com"
            />
            <Textarea
              placeholder="Write your message"
              className="min-h-24"
              name="message"
              required
            />

            <Button outline type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
