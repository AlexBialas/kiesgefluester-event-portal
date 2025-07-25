import { useEffect, useState } from "react";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-19T20:00:00+02:00").getTime(); // Berlin time
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference <= 0) return null;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <p className="text-center text-lg mt-10 text-green-400 font-medium">
        Das Event hat begonnen! 🎉
      </p>
    );
  }

  return (
    <div className="text-center mt-10">
      <h2 className="text-2xl font-semibold mb-4">Countdown zum Event:</h2>
      <div className="flex justify-center gap-6 text-xl font-bold">
        <div className="flex flex-col items-center">
          <span>{timeLeft.days}</span>
          <span className="text-sm font-normal">Tage</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.hours}</span>
          <span className="text-sm font-normal">Stunden</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.minutes}</span>
          <span className="text-sm font-normal">Minuten</span>
        </div>
        <div className="flex flex-col items-center">
          <span>{timeLeft.seconds}</span>
          <span className="text-sm font-normal">Sekunden</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
