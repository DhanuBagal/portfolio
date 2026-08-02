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
    <div className="w-full py-4 overflow-hidden select-none" style={{backgroundColor:'var(--bg-main)', borderTop:'1px solid var(--border-main)', borderBottom:'1px solid var(--border-main)'}}>
      <div className="animate-marquee flex items-center whitespace-nowrap gap-6">
        {marqueeList.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 shrink-0">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-wide" style={{color:'var(--text-secondary)'}}>
              {item}
            </span>
            <span className="font-mono font-bold text-sm" style={{color:'var(--accent)'}}>
              /
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
