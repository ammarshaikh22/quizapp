"use client";
import React, { useContext, useRef, useState } from "react";
import dataGet from "@/data/data.json";
import { Button } from "@/component/ui/moving-border";
import Timer from "@/component/Timer";
import { TypewriterEffectSmooth } from "@/component/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { Context } from "../context/CustomContext";

const Page = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const prevAnswers = useRef(answers);
  const { data, setSkip, setCorrect, setWrong } = useContext(Context);
  const router = useRouter();

  const handleTimesUp = () => {
    alert("Time's up!");
    let correctCount = 0;
    let skipCount = 0;
    let wrongAns = 0;
    dataGet.data.forEach((question, index) => {
      if (answers[index] !== question.correct && answers[index] !== undefined) {
        wrongAns++;
      } else if (answers[index] === question.correct) {
        correctCount++;
      }

      if (answers[index] === undefined) {
        skipCount++;
      }
    });
    setWrong(wrongAns);
    setCorrect(correctCount);
    setSkip(skipCount);
    prevAnswers.current = answers;
    router.push("/result");
  };

  const handleClick = () => {
    let correctCount = 0;
    let skipCount = 0;
    let wrongAns = 0;
    dataGet.data.forEach((question, index) => {
      if (answers[index] !== question.correct && answers[index] !== undefined) {
        wrongAns++;
      } else if (answers[index] === question.correct) {
        correctCount++;
      }

      if (answers[index] === undefined) {
        skipCount++;
      }
    });
    setWrong(wrongAns);
    setCorrect(correctCount);
    setSkip(skipCount);
    prevAnswers.current = answers;
    router.push("/result");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setAnswers({
      ...answers,
      [index]: e.target.value,
    });
  };

  const words = [{ text: "HI" }, { text: data.fName }, { text: data.lName }];

  return (
    <section className="dark:text-white bg-black relative py-10">
      <div className="max-w-[95%] mx-auto">
        <div className="flex-col flex md:flex-row justify-center md:items-start items-center">
          <div className="w-[10%]">
            <Timer initialMinutes={15} onTimesUp={handleTimesUp} />
          </div>
          <div className="flex flex-col gap-5 w-[70%] justify-center items-center mt-4">
            {dataGet.data.map((curr: any, index) => (
              <div
                className="p-5 rounded-lg bg-gray-900 w-[330px] sm:w-[500px] md:w-[550px] lg:w-[650px] h-auto"
                key={index}
              >
                <h1 className="text-lg">
                  {index + 1}): {curr.Ques}
                </h1>
                <div className="flex flex-col gap-6 items-start mt-6">
                  {["option1", "option2", "option3", "option4"].map(
                    (option, optIndex) => (
                      <div key={optIndex}>
                        <input
                          type="radio"
                          name={`options${index}`}
                          onChange={(e) => handleChange(e, index)}
                          value={option}
                        />
                        <span className="ml-4">{curr[option]}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="sm:w-[20%]">
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
        <div className="text-center my-10">
          <Button
            onClick={handleClick}
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Page;
