"use client";
import React, { useState } from "react";
import {
  Home,
  BarChart,
  Copy,
  Bookmark,
  Users,
  MessageSquareMore,
  LogOutIcon,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

const Sidebar = ({ children }) => {
  const { push } = useRouter();
  const cookies = useCookies();
  const [showNav, setShowNav] = useState(false);
  const Logout = () => {
    cookies.remove("authUser");
    push("/pages/sign");
  };
  return (
    <>
      <div className="hidden md:block">
        <aside className="flex h-screen w-16 flex-col items-center scrolh overflow-y-auto border-gray-500 border-r fixed py-8">
          <nav className="flex flex-1 flex-col items-center space-y-6">
            <Link href="/">
              <img src="/logo.svg" alt="Logo" />
            </Link>
            <Link
              href="/"
              replace={true}
              prefetch
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Home size={24} />
            </Link>

            <Link
              href="/pages/addcategory"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <BarChart size={24} />
            </Link>

            <Link
              href="/pages/addcodeitem"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Copy size={24} />
            </Link>

            <Link
              href="/pages/codeitem"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Bookmark size={24} />
            </Link>

            <Link
              href="/pages/users"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Users size={24} />
            </Link>

            <Link
              href="/pages/msges"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <MessageSquareMore size={24} />
            </Link>
            {/* <button
              onClick={Logout}
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <LogOutIcon size={24} />
            </button> */}
          </nav>
        </aside>
        <main className="ml-20">{children}</main>
      </div>
      <div className="md:hidden">
        <div className="fixed bottom-0 left-0 border-gray-500 bg-[#131b30] border-t py-3 w-full z-50">
          <nav className="flex flex-1 justify-around items-center">
            <Link
              href="/"
              replace={true}
              prefetch
              onClick={() => {
                setShowNav(false);
              }}
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Home size={24} />
            </Link>

            <Link
              onClick={() => {
                setShowNav(false);
              }}
              href="/pages/addcategory"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <BarChart size={24} />
            </Link>

            <Link
              onClick={() => {
                setShowNav(false);
              }}
              href="/pages/addcodeitem"
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Copy size={24} />
            </Link>

            <button
              onClick={() => {
                setShowNav(!showNav);
              }}
              className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
            >
              <Menu size={24} />
            </button>
            <div
              className={`absolute z-50 transition-all bg-[#131b30] border-gray-500 border rounded-md p-2 flex flex-col items-center ${
                showNav ? "-translate-x-2" : "translate-x-[100%]"
              } justify-center gap-6 -top-60 right-0`}
            >
              <Link
                href="/pages/codeitem"
                className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
              >
                <Bookmark size={24} />
              </Link>

              <Link
                href="/pages/users"
                className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
              >
                <Users size={24} />
              </Link>

              <Link
                href="/pages/msges"
                className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
              >
                <MessageSquareMore size={24} />
              </Link>

              <button
                onClick={Logout}
                className="rounded-lg p-1.5 text-gray-200 transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
              >
                <LogOutIcon size={24} />
              </button>
            </div>
          </nav>
        </div>
        <main className="mb-40">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
