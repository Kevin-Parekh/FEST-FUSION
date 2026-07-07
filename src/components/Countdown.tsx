import { useState, useEffect } from 'react';

export function Countdown() {
  const calculateTimeLeft = () => {
    // Set date to some future date relative to current metadata time (2026)
    const target = new Date('2026-11-15T09:00:00').getTime();
    const now = new Date().getTime();
    const difference = target - now;
    
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-6 justify-center mt-12 w-full max-w-3xl mx-auto">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="glass rounded-2xl p-4 sm:p-6 flex-1 min-w-[70px] sm:min-w-[100px] flex flex-col items-center justify-center transition-transform hover:-translate-y-1">
          <span className="text-4xl sm:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-orange-200/80 mt-2 font-medium">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
}
