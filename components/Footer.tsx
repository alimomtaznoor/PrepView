import Link from "next/link";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-10 gap-2">
      {/* <div>
        <Link href="/terms">
          <h1 className="text-sm text-[#6d6d6d]">Privacy Policy</h1>
        </Link>
      </div> */}

      <h1 className="text-sm text-[#656464]">
        Made by{" "}
        <Link href="https://github.com/alimomtaznoor" >@alimomtaznoor</Link>
      </h1>

      <div className="flex gap-2">
        <Link href="https://www.buymeacoffee.com/alimomtaznoor">
          <SiBuymeacoffee color="#524c8b" />
        </Link>
        <Link href="https://www.github.com/alimomtaznoor">
          <FaGithub color="#524c8b" />
        </Link>
        <Link href="https://www.linkedin.com/in/alimomtaznoor">
          <FaLinkedin color="#524c8b" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
