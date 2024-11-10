"use client";
import React from 'react';

interface SkillProps {
  name: string;
  percentage: number;
}

const Skill: React.FC<SkillProps> = ({ name, percentage }) => {
  return (
    <div className="flex flex-col items-center mx-4 mb-10 sm:mb-20">
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center">
        <svg className="absolute" width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="#06b6d4"
            strokeWidth="8"
            fill="none"
            strokeDasharray="251.2"
            strokeDashoffset={251.2 - (percentage / 100) * 251.2}
            strokeLinecap="round"
            style={{
              transition: 'stroke 0.5s ease-in-out',
            }}
          />
        </svg>
        <span className="absolute text-white text-lg sm:text-xl font-bold">
          {percentage}%
        </span>
      </div>
      <span className="mt-3 text-lg sm:text-2xl text-white">{name}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills: SkillProps[] = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 76 },
    { name: 'JavaScript', percentage: 65 },
    { name: 'TypeScript', percentage: 60 },
    { name: 'Next.js', percentage: 50 },
    { name: 'Tailwind CSS', percentage: 60},
  ];

  return (
    <div className=" mb-10 sm:mt-20 sm:mb-30 w-full ">
      <h2 className="text-center text-3xl sm:text-4xl font-bold underline text-cyan-600 mb-10 sm:mb-20">
        My Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
