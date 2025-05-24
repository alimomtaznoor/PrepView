import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();
  if (!user) {
    return {
      success: false,
      message: "Session expired. Please log in again.",
    };
  }

  const [allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasUpcomingInterviews = allInterview?.length! > 0;
  return (
    <section className="mt-12 h-[40vh]">
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
          <p className="text-zinc-500 dark:text-zinc-900">
            There are no interviews available
          </p>
        )}
      </div>
    </section>
  );
};

export default page;
