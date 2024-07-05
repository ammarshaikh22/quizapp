"use client";
import React, { useContext, useState } from "react";
import dataGet from "@/data/data.json";
import { Button } from "@/component/ui/moving-border";
import Timer from "@/component/Timer";
import { TypewriterEffectSmooth } from "@/component/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { Context } from "../context/CustomContext";

const Page = () => {
  let { data } = useContext(Context)
  let { setCorrect } = useContext(Context) as any
  let router = useRouter()
  const [answers, setAnswers] = useState({}) as any;

  const handleTimesUp = () => {
    alert("Time's up!");
    router.push('/result')
  };

  const handleClick = () => {
    dataGet.data.forEach((question, index) => {
      if (answers[index] === question.correct) {
        setCorrect((pre: any) => {
          return pre + 1
        })
      }
    });
    router.push('/result')
  };

  const handleChange = (e: any, index: number) => {
    setAnswers({
      ...answers,
      [index]: e.target.value,
    });
  };
  let words = [
    {
      text: "HI",
    },
    {
      text: data.fName,
    },
    {
      text: data.lName,
    },
  ];

  return (
    <section className="relative py-10">
      <div className="max-w-[95%] mx-auto ">
        <div className="flex-col flex md:flex-row justify-center md:items-start items-center">
          <div className="w-[10%]">
            <Timer initialMinutes={10} onTimesUp={handleTimesUp} />
          </div>
          <div className="flex flex-col gap-5 w-[70%] justify-center items-center">
            {dataGet.data.map((curr, index) => {
              return (
                <div
                  className="p-5 rounded-lg bg-gray-900 sm:w-[500px] md:w-[550px] lg:w-[650px] h-auto "
                  key={index}
                >
                  <h1 className="text-lg">{index + 1}):{curr.Ques}</h1>
                  <div className="flex flex-col gap-6 items-start mt-6">
                    <div>
                      <input
                        type="radio"
                        name={`options${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value="option1"
                      />
                      <span className="ml-4">{curr.option1}</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name={`options${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value="option2"
                      />
                      <span className="ml-4">{curr.option2}</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name={`options${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value="option3"
                      />
                      <span className="ml-4">{curr.option3}</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        name={`options${index}`}
                        onChange={(e) => handleChange(e, index)}
                        value="option4"
                      />
                      <span className="ml-4">{curr.option4}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[20%]">
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
