import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "PrevView",
  description: "Let AI prepare you for the interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${quicksand.variable}  antialiased pattern`}
      >
        {children}
      </body>
    </html>
  );
}
