"use client";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "../buttons/NavLinks";
import AuthButton from "../buttons/AuthButton";

import { signOut, useSession } from "next-auth/react";

const Navbar = () => {

 const { data: session, status } = useSession();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  const nav = (
    <>
      <NavLinks href="/">Home</NavLinks>
      <NavLinks href="/products">Products</NavLinks>
      <NavLinks href="/profileCard">User_Profile</NavLinks>
      
    </>
  );

  return (
    <nav className="bg-linear-to-r from-blue-300 to-blue-400 text-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/icons8-galaxy-store-100.png" alt="Logo" className="w-9 h-9" />
          <span className="text-xl font-bold">MyStore</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">

          {/* Nav Links */}
          <div className="flex items-center gap-4">
            {nav}
          </div>

          {/* Auth */}
            {/* <AuthButton></AuthButton> */}
          {status == "unauthenticated" ? (
            <div className="flex items-center gap-3">
              <Link
                // onClick={handleLogin}
                href="/logIN"
                className="bg-white text-sky-600 px-4 py-1.5 rounded-lg font-medium hover:bg-gray-100 transition"

              >
                Login
              </Link>

              <Link
                href="/register"
                className="border border-white px-4 py-1.5 rounded-lg hover:bg-white hover:text-sky-600 transition"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="bg-white text-sky-600 px-4 py-1.5 rounded-lg font-medium"
              >
                {session && session.user?.name}
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white text-black shadow-lg rounded-lg overflow-hidden">

                  <div className="p-3 border-b">
                        { session && (
                          <>
                            <p className="font-semibold">{session.user?.name}</p>
                            <p className="text-sm text-gray-500">{session.user?.email}</p>
                          </>
                        )}
                  </div>

                  <Link className="block px-4 py-2 hover:bg-gray-100" href="/addProduct">
                    Add Product
                  </Link>

                  <Link className="block px-4 py-2 hover:bg-gray-100" href="/manageProducts">
                    Manage Products
                  </Link>

                  <button
                    onClick={()=> signOut()}
                    className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-sky-500 border-t border-sky-400">

          <div className="flex flex-col gap-3">
            {nav}
          </div>

          {status == "unauthenticated" ? (
            <div className="flex flex-col gap-2 mt-3">
              <Link
                // onClick={handleLogin}
                href="/logIN"
                
                className="bg-white text-sky-600 px-4 py-2 rounded"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="border border-white text-white px-4 py-2 rounded text-center"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="border-t border-sky-400 pt-3 flex flex-col gap-2">
                  {session && (
                    <>
                      <p className="font-semibold">{session.user?.name}</p>
                      <p className="text-sm text-white/80">{session.user?.email}</p>
                    </>
                  )}

              <Link href="/addProduct" className="hover:text-blue-200">
                Add Product
              </Link>

              <Link href="/manageProducts" className="hover:text-blue-200">
                Manage Products
              </Link>

              <button onClick={()=> signOut()} className="text-red-200 text-left">
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;