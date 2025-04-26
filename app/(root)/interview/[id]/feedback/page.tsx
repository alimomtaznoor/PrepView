import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id!,
  });

  return (
    <section className="max-w-4xl mx-auto mt-10 bg-white/60 dark:bg-zinc-900/70 backdrop-blur-lg rounded-2xl p-8 shadow-md space-y-10 border border-zinc-300 dark:border-zinc-700">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 dark:text-white">
          Feedback on the Interview -{" "}
          <span className="capitalize text-primary-500">{interview.role}</span>
        </h1>
      </div>

      {/* Metadata */}
      <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-300">
        <div className="flex items-center gap-2">
          <Image src="/star.svg" width={20} height={20} alt="star" />
          <p>
            Overall Impression:{" "}
            <span className="text-primary-500 font-semibold">
              {feedback?.totalScore ?? "---"}
            </span>
            /100
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
          <p>
            {feedback?.createdAt
              ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
              : "Date not available"}
          </p>
        </div>
      </div>

      <hr className="border-zinc-300 dark:border-zinc-700" />

      {/* Final Assessment */}
      <p className="text-zinc-700 dark:text-zinc-100 leading-relaxed">
        {feedback?.finalAssessment}
      </p>

      {/* Breakdown */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">
          Breakdown of the Interview
        </h2>

        <div className="grid gap-4">
          {feedback?.categoryScores?.map((category, index) => (
            <div
              key={index}
              className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700"
            >
              <p className="font-semibold text-zinc-800 dark:text-white mb-1">
                {index + 1}. {category.name} ({category.score}/100)
              </p>
              <p className="text-zinc-600 dark:text-zinc-300">
                {category.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths */}
      <div>
        <h3 className="text-lg font-semibold text-green-600">Strengths</h3>
        <ul className="list-disc list-inside mt-2 text-zinc-700 dark:text-zinc-200">
          {feedback?.strengths?.map((strength, index) => (
            <li key={index}>{strength}</li>
          ))}
        </ul>
      </div>

      {/* Areas for Improvement */}
      <div>
        <h3 className="text-lg font-semibold text-rose-500">
          Areas for Improvement
        </h3>
        <ul className="list-disc list-inside mt-2 text-zinc-700 dark:text-zinc-200">
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index}>{area}</li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/" className="w-full">
          <Button className="w-full bg-zinc-200 hover:bg-zinc-300 text-zinc-800 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 cursor-pointer">
            Back to Dashboard
          </Button>
        </Link>
        <Link href={`/interview/${id}`} className="w-full">
          <Button className=" bg-[#8F87F1] hover:bg-[#6660ae] text-white py-3 px-6 rounded-xl w-full max-sm:w-full transition-all cursor-pointer">
            Retake Interview
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Feedback;
