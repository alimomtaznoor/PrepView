import Link from 'next/link'
import React from 'react'
import { SiBuymeacoffee } from "react-icons/si";

const Footer = () => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div>
        <Link href="/terms">
          <h1 className="text-sm text-[#6d6d6d]">Privacy Policy</h1>
        </Link>
      </div>

      <h1 className="text-sm text-[#656464]">
        Made by{" "}
        <Link href="https://github.com/alimomtaznoor">@alimomtaznoor</Link>
      </h1>

      <div>
        <Link href="https://www.buymeacoffee.com/alimomtaznoor">
          <SiBuymeacoffee color="#524c8b" />
        </Link>
      </div>
    </div>
  );
}

export default Footer