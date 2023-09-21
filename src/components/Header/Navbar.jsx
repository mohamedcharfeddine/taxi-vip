"use client";
import React, { useReducer, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const router = useRouter();
  console.log()
  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="/assets/logo-nav.png"
            className="h-8 mr-3"
            alt="Company Logo"
            width={100}
            height={100}
          />
        </a>
        <div className="flex md:order-2 gap-4">
          <button
            type="button"
            className="bg-primary text-dark rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
          >
            Book
          </button>
          <button
            type="button"
            className="bg-dark text-primary rounded-full focus:ring-4 focus:outline-none font-medium text-sm px-4 py-1 text-center mr-3 md:mr-0"
          >
            Contact
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <AiOutlineMenu size={24} />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            <Link
              href="/"
              className={`${
                router.pathname === "/"
                  ? "text-primary underline-offset-4 underline"
                  : "text-black "
              }`}
            >
              Home
            </Link>
            <Link
              href="/AboutUs"
              className={`${
                router.pathname === "/AboutUs"
                  ? "text-primary underline-offset-4 underline"
                  : "text-black "
              }`}
            >
              About
            </Link>
            <NavDropdown/>

            <Link
              href="/Booking"
              className={`${
                router.pathname === "/Booking"
                  ? "text-primary underline-offset-4 underline"
                  : "text-black "
              }`}
            >
              Book
            </Link>
            <Link
              href="/Region"
              className={`${
                router.pathname === "/Region"
                  ? "text-primary underline-offset-4 underline"
                  : "text-black "
              }`}
            >
              Regio's
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
