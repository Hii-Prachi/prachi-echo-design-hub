
import React from 'react';

const skills = [
  "LEARNING EXPERIENCE DESIGNER",
  "PRODUCT DESIGNER", 
  "PROGRAM MANAGER",
  "FACILITATOR",
  "ZINE MAKER",
  "ILLUSTRATOR",
  "COMMUNICATIONS"
];

const TickerTape = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-50 py-3 border-y border-gray-200">
      <div className="flex whitespace-nowrap animate-scroll">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <span 
            key={index} 
            className="inline-flex items-center mx-6 font-inter font-medium text-sm tracking-wider text-gray-700"
          >
            {skill}
            <span className="ml-6 text-coral-500">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
