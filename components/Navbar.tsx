"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  async function handleSignOut() {
    try {
      await fetch("/api/signout", { method: "POST" });
      router.push("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className="flex items-center justify-between gap-8 p-4  relative">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-[#eaeaea] uppercase text-xl md:text-4xl">
          Preper
          <span
            className="text-[#8F87F1] font-extrabold"
            style={{
              textShadow:
                "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
            }}
          >
            s
          </span>
        </h2>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-4">
          <Link
            className="text-[#eaeaea] font-bold text-xs lg:text-lg"
            href="/previnterviews"
          >
            Previous Interviews
          </Link>
          <Link
            className="text-[#eaeaea] font-bold text-xs lg:text-lg"
            href="/cominginterviews"
          >
            Upcoming Interviews
          </Link>
        </div>
        <button
          className="text-[#8F87F1] bg-[#eaeaea] px-2 py-1 flex items-center text-xs font-bold rounded-sm cursor-pointer"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <div className="relative">
          <input
            id="label-check"
            type="checkbox"
            className="label-check hidden"
            checked={isMenuOpen}
            onChange={() => setIsMenuOpen(!isMenuOpen)}
          />
          <label
            htmlFor="label-check"
            className="hamburger-label relative block cursor-pointer w-[40px] h-[40px]"
          >
            <div className="line1 absolute w-full h-[4px] bg-white top-0 left-0 transition-all"></div>
            <div className="line2 absolute w-full h-[4px] bg-white top-[12px] left-0 transition-all"></div>
            <div className="line3 absolute w-full h-[4px] bg-white top-[24px] left-0 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-[#202020f9] shadow-lg rounded-md flex flex-col gap-6 py-36 px-32 z-50 md:hidden">
          <Link
            className="text-[#eaeaea] font-bold"
            href="/previnterviews"
            onClick={() => setIsMenuOpen(false)}
          >
            Previous Interviews
          </Link>
          <Link
            className="text-[#eaeaea] font-bold"
            href="/cominginterviews"
            onClick={() => setIsMenuOpen(false)}
          >
            Upcoming Interviews
          </Link>
          <button
            className="text-[#8F87F1] bg-[#eaeaea] px-2 py-1 text-xs font-bold rounded-sm cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
              handleSignOut();
            }}
          >
            Sign Out
          </button>
        </div>
      )}
    </nav>
  );
}
