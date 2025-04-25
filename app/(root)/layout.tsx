import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout ">
      <nav className="flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} /> */}
          <h2 className="text-[#000000b4] uppercase text-4xl">
            Preper<span className="text-[#8F87F1] font-extrabold">s</span>
          </h2>
        </Link>

        <Link href="/" className="flex items-center text-sm rounded-sm">
          Sign Out
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
