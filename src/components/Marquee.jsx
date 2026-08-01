import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Marquee = () => {
  const items = portfolioData.marqueeItems || [
    "1+ Years Production Experience",
    "AWS Certified Cloud Practitioner",
    "Promoted Intern to SE in 6 Months",
    "B.Tech CSE (9.28 CGPA)",
    "Angular 18 & React Specialist",
    "Spring Boot Microservices Architecture",
    "100% Production Data Accuracy"
  ];

  // Repeat array to ensure seamless infinite loop
  const marqueeList = [...items, ...items, ...items];

  return (
    <div className="w-full py-4 bg-[#F8FAFC] dark:bg-[#0B0F17] border-y border-slate-200 dark:border-slate-800/80 overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-6">
        {marqueeList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-wide text-slate-800 dark:text-slate-200">
              {item}
            </span>
            <span className="text-indigo-600 dark:text-cyan-400 font-mono font-bold text-sm">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
