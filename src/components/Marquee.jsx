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
    <div className="w-full py-4 bg-[#FAF7F7] dark:bg-[#1A1D24] border-y border-[#EFE4E6] dark:border-[#2A2F3A] overflow-hidden select-none">
      <div className="animate-marquee flex items-center whitespace-nowrap gap-6">
        {marqueeList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#222222] dark:text-slate-200">
              {item}
            </span>
            <span className="text-[#D98F9D] dark:text-[#D98F9D] font-bold text-sm">
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
