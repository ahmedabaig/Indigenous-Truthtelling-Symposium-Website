"use client";
import { useState } from "react";
import Team from "../data/Team";

const TeamBox = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col w-screen items-center justify-center sm:gap-8">
      {Team.map((member, index) => (
        <div
        key={index}
        className={`flex flex-col items-center w-full sm:w-auto ${
            openIndex === index ? "mb-10" : "mb-4"
        }`}
        >
            <div
                className="italic text-center p-4 border-4 sm:border-b-2 rounded-full w-3/4 text-xl sm:text-2xl border-yellow-300 bg-black-200 cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
                {member.name}
            </div>

            <div
                className={`
                p-4 border-4 border-t-2 border-yellow-300 bg-black-200 w-4/6
                overflow-hidden
                transition-all duration-500 ease-in-out
                ${openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
                sm:max-h-full sm:opacity-100
                `}
            >
                <p>{member.description}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default TeamBox;