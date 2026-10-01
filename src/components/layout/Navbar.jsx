import Image from "next/image";
import React from "react";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/courses"}>Courses</NavLink>
      </li>{" "}
      <li>
        <NavLink href={"/creators"}>Creators</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="w-full bg-[#0A38F5]">
        <div className="navbar mx-auto max-w-7xl px-5 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {nav}
              </ul>
            </div>
           <Link href={'/'} className="cursor-pointer">
            <div className="flex items-center gap-1 text-center">
              <Image 
                src={"/assets/logo.png"}
                alt="logo"
                height={40}
                width={30}
                
              ></Image>
              <h2 className="text-[22px] font-bold text-white">ByteSpace</h2>
            </div>
           </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>
          <div className="navbar-end gap-5">
            <Link
              href="/signin"
              className="text-sm cursor-pointer font-medium text-white hover:text-[#C8FF00]"
            >
              Sign In
            </Link>

            <Link
              href="/joinus"
              className="rounded-full cursor-pointer bg-[#C8FF00] px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-[#d9ff4d]"
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
    </div>
  );
};

export default Navbar;
