import React, { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '../utils/dateUtils';
import { coupleInfo } from '../data/weddingData';

interface CountdownUnitProps {
  value: number;
  label: string;
}

const CountdownUnit: React.FC<CountdownUnitProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 md:w-24 h-16 md:h-24 flex items-center justify-center bg-pink-50 rounded-lg shadow-sm mb-2">
      <span className="font-serif text-2xl md:text-3xl text-gray-800">{value}</span>
    </div>
    <span className="text-xs md:text-sm text-gray-600">{label}</span>
  </div>
);

const Countdown: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining(coupleInfo.weddingDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(coupleInfo.weddingDate));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl text-gray-800 mb-2">Counting Down to Our Special Day</h2>
          <div className="w-16 h-0.5 bg-pink-300 mx-auto"></div>
        </div>
        
        <div className="flex justify-center space-x-4 md:space-x-8">
          <CountdownUnit value={timeRemaining.days} label="Days" />
          <CountdownUnit value={timeRemaining.hours} label="Hours" />
          <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
          <CountdownUnit value={timeRemaining.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};

export default Countdown;