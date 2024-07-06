"use client";
import React, { useContext } from "react";
import { Context } from "../context/CustomContext";
import { HoverBorderGradient } from "@/component/ui/hover-border-gradient";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/quizapp");
  };
  return (
    <section className="relative py-5 md:py-10">
      <div className="max-w-[80%] md:max-w-[70%] mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-56 ">
            <div>
              <h3 className="text-3xl text-blue-400 font-semibold text-center mb-10">
                Welcome to TypeScript Test!
              </h3>
              <p className="text-sm my-4">
                This test consists of 25 questions that cover various aspects of
                TypeScript. You have a total of 15 minutes to complete the test.
                Please read the following guidelines carefully before starting
              </p>
              <ul className="mb-10">
                <li className="mt-5 list-disc">
                  Duration: You have exactly 15 minutes to complete all 25
                  questions.
                </li>
                <li className="mt-5 list-disc">
                  Question Format: Each question is multiple-choice with only
                  one correct answer.
                </li>
                <li className="mt-5 list-disc">
                  Submission: Ensure to submit your answers before the timer
                  runs out. The test will automatically submit once the time
                  limit is reached.
                </li>
                <li className="mt-5 list-disc">
                  Start Time: The test will start as soon as you click the Start
                  Quiz button
                </li>
                <li className="mt-5 list-disc">
                  Good Luck!: We wish you the best of luck in completing the
                  TypeScript test. If you have any technical issues or
                  questions, please reach out to the support team.
                </li>
              </ul>
              <HoverBorderGradient
                onClick={handleClick}
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
              >
                <span>Start Quiz</span>
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
