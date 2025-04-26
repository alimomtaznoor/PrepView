"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function Navbar() {
  const router = useRouter();

  async function handleSignOut() {
    try {
      await fetch("/api/signout", { method: "POST" });
      router.push("/sign-in");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }

  return (
    <nav className="flex items-center justify-between gap-8">
      <Link href="/" className="flex items-center gap-2">
        <h2 className="text-[#eaeaea] uppercase text-4xl">
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

      <div className="flex items-center gap-8">
        <div className="flex gap-4">
          <Link className="text-[#eaeaea] font-bold" href="/previnterviews">
            Previous Interviews
          </Link>
          <Link className="text-[#eaeaea] font-bold" href="/cominginterviews">
            Upcoming Interviews
          </Link>
        </div>
        <button
          className="text-[#8F87F1] bg-[#eaeaea] px-2 py-1  flex items-center text-xs font-bold rounded-sm cursor-pointer "
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
