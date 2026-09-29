import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import NavLink from "../buttons/NavLink";
import { IoBag } from "react-icons/io5";

const Navbar = () => {

  const nav =<>
  <li >
   <NavLink  href={'/'}>Home</NavLink>
  </li>
   <li>
   <NavLink href={'/courses'}>Courses</NavLink>
  </li>
   <li>
   <NavLink href={'/creators'}>Creator</NavLink>
  </li>
  
  </>
  return (
    <div>
         <div className="navbar #0A38F5 text-white  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {nav}
      </ul>
    </div>
    <Logo></Logo>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {nav}
    </ul>
  </div>
  <div className="navbar-end space-x-4">
   <Link href={'/sign-in'}>Sign In</Link>
   <Link href={'/join-us'}>Join Us</Link>
   <Link href={'/bag'}><IoBag></IoBag></Link>
  </div>
</div>
    </div>
  );
};

export default Navbar;
