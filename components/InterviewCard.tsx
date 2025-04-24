import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
    <div className="w-full sm:max-w-sm bg-white/60 dark:bg-zinc-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col justify-between min-h-[400px] transition-all border border-zinc-200 dark:border-zinc-700">
      {/* Top Section */}
      <div className="relative">
        {/* Badge */}
        <div
          className={cn(
            "absolute top-0 right-0 px-3 py-1 rounded-bl-xl text-xs font-semibold text-white tracking-wide",
            {
              Behavioral: "bg-blue-500",
              Mixed: "bg-purple-500",
              Technical: "bg-emerald-600",
            }[normalizedType] || "bg-gray-600"
          )}
        >
          {normalizedType}
        </div>

        {/* Avatar */}
        <div className="flex justify-center mb-4 mt-2">
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={80}
            height={80}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Role */}
        <h3 className="text-center text-xl font-bold capitalize text-zinc-800 dark:text-white">
          {role} Interview
        </h3>

        {/* Metadata */}
        <div className="flex justify-center gap-6 mt-4 text-sm text-zinc-600 dark:text-zinc-300">
          <div className="flex items-center gap-2">
            <Image src="/calendar.svg" alt="calendar" width={20} height={20} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/star.svg" alt="star" width={20} height={20} />
            <span>{feedback?.totalScore || "---"}/100</span>
          </div>
        </div>

        {/* Feedback or Prompt */}
        <p className="mt-5 text-zinc-700 dark:text-zinc-200 text-sm line-clamp-3 text-center">
          {feedback?.finalAssessment ||
            "You haven't taken this interview yet. Start now and see how you perform."}
        </p>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4 mt-6">
        <DisplayTechIcons techStack={techstack} />

        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-xl w-full transition">
          <Link
            href={
              feedback
                ? `/interview/${interviewId}/feedback`
                : `/interview/${interviewId}`
            }
          >
            {feedback ? "Check Feedback" : "Start Interview"}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default InterviewCard;
