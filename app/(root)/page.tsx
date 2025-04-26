import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import RobotDisplay from "@/components/ui/Robot";

async function Home() {
 

  return (
    <>
      <section
        className="rounded-3xl shadow-2xl p-24 md:flex md:items-center md:justify-between gap-10 transition-all"
        style={{
          backgroundImage: "url(/bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        
        }}
      >
        <div className="flex flex-col gap-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800 dark:text-white leading-tight">
            Get Ready for Interviews with Smart Practice
          </h2>
          <p className="text-md md:text-lg text-zinc-600 dark:text-zinc-300">
            Answer real questions, sharpen your skills, and get instant
            feedback.
          </p>

          <Button
            asChild
            className="bg-[#7d75d4] hover:bg-[#6660ae] text-white py-3 px-6 rounded-xl w-fit max-sm:w-full transition-all"
          >
            <Link href="/interview">Begin Interview Session</Link>
          </Button>
        </div>

        <div className="max-w-lg mx-auto hidden sm:block !h-[25rem]">
          <RobotDisplay />
        </div>
      </section>

      

      
    </>
  );
}

export default Home;
