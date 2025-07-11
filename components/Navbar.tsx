"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import Logo from "./ui/Logo";

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
        <Logo color="#eaeaea" spanColor="#8F87F1" borderColor="#eaeaea" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-20">
        <div className="flex gap-4">
          <Link
            className="text-[#eaeaea] font-bold text-xs lg:text-sm"
            href="/my-interviews"
          >
            <Btn text="My Interviews" />
          </Link>
          <Link
            className="text-[#eaeaea] font-bold text-xs lg:text-sm"
            href="/other-interviews"
          >
            <Btn text="Explore Interviews" />
          </Link>
        </div>

        <button
          className="sign-in-btn"
          onClick={() => {
            setIsMenuOpen(false);
            handleSignOut();
          }}
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
            className="hamburger-label relative block cursor-pointer w-[30px] h-[30px]"
          >
            <div className="line1 absolute w-full h-[2px] bg-white top-0 left-0 transition-all"></div>
            <div className="line2 absolute w-full h-[2px] bg-white top-[12px] left-0 transition-all"></div>
            <div className="line3 absolute w-full h-[2px] bg-white top-[24px] left-0 transition-all"></div>
          </label>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-[#202020f9] shadow-lg rounded-md flex flex-col gap-6 py-36 px-32 z-50 md:hidden">
          <Link
            className="text-[#eaeaea] font-bold"
            href="/my-interviews"
            onClick={() => setIsMenuOpen(false)}
          >
            <Btn text="My Interviews" size="11px" />
          </Link>
          <Link
            className="text-[#eaeaea] font-bold"
            href="/other-interviews"
            onClick={() => setIsMenuOpen(false)}
          >
            <Btn text="Explore Interviews" size="11px"  />
          </Link>

          <button
            className="sign-in-btn"
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


function Btn({text, size}: {text: string, size?: string}) {
  return (
    <button className="nav-btn" style={{ fontSize: size}}>
      {text}
    </button>
  )
}


