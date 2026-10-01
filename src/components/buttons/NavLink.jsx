"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink=({ href, children }) =>{
  const pathname = usePathname();

  const active =
    href === "/"
      ? pathname === "/"
      : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-light transition ${
        active
          ? "text-[#C8FF00]"
          : "text-white hover:text-[#C8FF00]"
      }`}
    >
      {children}
    </Link>
  );
}
export default NavLink