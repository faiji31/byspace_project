"use client";

import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";

import Logo from "./Logo";
import NavLink from "../buttons/NavLink";

export default function Navbar() {
  return (
    <header className="w-full bg-[#0A38F5]">
      <div className="mx-auto max-w-7xl px-5">

        <div className="navbar min-h-[72px] bg-transparent px-0">

      
          <div className="navbar-start">

  
            <div className="dropdown lg:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost mr-2 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content z-[50] mt-3 w-52 rounded-box bg-[#0A38F5] p-3 shadow-lg"
              >
                <li>
                  <NavLink href="/">Home</NavLink>
                </li>

                <li>
                  <NavLink href="/courses">Courses</NavLink>
                </li>

                <li>
                  <NavLink href="/creators">Creator</NavLink>
                </li>
              </ul>
            </div>

            <Logo />
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <nav className="flex items-center gap-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/courses">Courses</NavLink>
              <NavLink href="/creators">Creator</NavLink>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="navbar-end gap-5">

            <Link
              href="/sign-in"
              className="text-sm font-medium text-white hover:text-[#C8FF00]"
            >
              Sign In
            </Link>

            <Link
              href="/join-us"
              className="rounded-full bg-[#C8FF00] px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-[#d9ff4d]"
            >
              Join Us
            </Link>

            <Link
              href="/bag"
              className="text-xl text-white hover:text-[#C8FF00]"
            >
              <IoBagOutline />
            </Link>

          </div>

        </div>
      </div>
    </header>
  );
}