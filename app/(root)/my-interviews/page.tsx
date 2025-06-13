import React from 'react'

import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import { getCurrentUser } from '@/lib/actions/auth.action';
import InterviewCard from '@/components/InterviewCard';

const page = async() => {
    const user = await getCurrentUser();

    const [userInterviews] = await Promise.all([
        getInterviewsByUserId(user?.id!),
        getLatestInterviews({ userId: user?.id! }),
    ]);
    
    const hasPastInterviews = userInterviews?.length! > 0;
  return (
    <section className="mt-12 h-[40vh]">
            <h2 className="text-2xl font-semibold text-black-900 dark:text-white mb-4">
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
                <p className="text-zinc-800 dark:text-zinc-900">
                  You haven&apos;t taken any interviews yet
                </p>
              )}
            </div>
          </section>
  )
}

export default page