import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaMoon,
  FaSun,
  FaLinkedin,
} from "react-icons/fa";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";

export default function HeaderComponent() {
  const path = useLocation().pathname;
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const [signIn, setSignin] = useState(true);

  return (
    <div className="w-full fixed z-50">
      <div className="w-full h-10 hidden md:flex justify-between items-center px-4 md:px-10 bg-slate-200 dark:bg-slate-700">
        <div className="flex gap-2">
          <Link
            to="toyinafola@yahoo.com"
            className="text-sm hover:underline underline-offset-2 hover:text-blue-600"
          >
            toyinafola@yahoo.com
          </Link>
          <Link
            to="mailto:afolabioe@abuad.edu.ng"
            className="text-sm hover:underline underline-offset-2 hover:text-blue-600"
          >
            afolabioe@abuad.edu.ng
          </Link>
        </div>
        <div className="flex items-center gap-2 ml-3 pt-3 md:pt-0 text xl md:text-2xl">
          <Link to="https://www.linkedin.com">
            <FaLinkedin />
          </Link>
          <Link to="https://www.facebook.com">
            <FaFacebook />
          </Link>
          <Link to="https://www.instagram.com">
            <FaInstagram />
          </Link>
          <Link to="https://www.twitter.com">
            <FaTwitter />
          </Link>
        </div>
      </div>
      <Navbar fluid className="w-full md:p-6 bg-white border-b-2">
        <Navbar.Brand href="/">
          <img
            src="/site_logo.png"
            className="mr-3 h-10 sm:h-14"
            alt="afolabi oe"
          />
        </Navbar.Brand>
        <div className="flex gap-2 md:order-2">
          <Button
            as="span"
            className="w-12 h-10 cursor-pointer"
            color="gray"
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </Button>
          {signIn ? (
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">User Name</span>
                <span className="block truncate text-sm font-medium">
                  name@email.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Profile</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          ) : (
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/about-me"} as={"div"}>
            <Link to="/about-me">About Me</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/research"} as={"div"}>
            <Link to="/research">Research</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/publications"} as={"div"}>
            <Link to="/publications">Publications</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/contact"} as={"div"}>
            <Link
              to="/contact-me"
              className="md:bg-green-500 md:text-white md:py-2 md:px-4 rounded-lg hover:opacity-85"
            >
              Contact
            </Link>
          </Navbar.Link>
          <div className="flex md:hidden items-center gap-2 ml-3 pt-3 md:pt-0 text xl md:text-2xl">
            <Link to="https://www.linkedin.com">
              <FaLinkedin />
            </Link>
            <Link to="https://www.facebook.com">
              <FaFacebook />
            </Link>
            <Link to="https://www.instagram.com">
              <FaInstagram />
            </Link>
            <Link to="https://www.twitter.com">
              <FaTwitter />
            </Link>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
