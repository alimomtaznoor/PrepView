import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Epilogue } from "next/font/google";

import "./globals.css";

const epilogueSand =Epilogue({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prepers",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${epilogueSand.className} antialiased pattern`}>
        {children}

        <Toaster />
      </body>
    </html>
  );
}
