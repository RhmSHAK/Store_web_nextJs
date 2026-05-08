"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={`font-medium transition-colors duration-200
        ${isActive ? "text-white bg-blue-500 px-3 py-1 rounded-lg" : "text-white/90 hover:text-black"}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLinks;