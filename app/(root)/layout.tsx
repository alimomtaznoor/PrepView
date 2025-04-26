import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/Navbar"; // adjust the import path
import { isAuthenticated } from "@/lib/actions/auth.action";
import Footer from "@/components/Footer";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  // if (!isUserAuthenticated) {
  //   redirect("/sign-in");
  // }

  return (
    <div className="root-layout">
      <Navbar isUserAuthenticated={isUserAuthenticated} /> {/* <-- this is a client component */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
