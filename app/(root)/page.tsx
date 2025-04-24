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
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = allInterview?.length! > 0;

  return (
    <>
      <section className="rounded-3xl shadow-2xl p-24 md:flex md:items-center md:justify-between gap-10 transition-all"
        style={{
          backgroundImage: "url(/bg.webp)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",

        
      }}>
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
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-xl w-fit max-sm:w-full transition-all"
          >
            <Link href="/interview">Begin Interview Session</Link>
          </Button>
        </div>

        <div className="max-w-lg mx-auto hidden sm:block !h-[25rem]">
          <RobotDisplay />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-4">
          Your Past Interviews
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p className="text-zinc-500 dark:text-zinc-400">
              You haven&apos;t taken any interviews yet
            </p>
          )}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white mb-4">
          Upcoming Interviews
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
            ))
          ) : (
            <p className="text-zinc-500 dark:text-zinc-400">
              There are no interviews available
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
