"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <MainContainer />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="flex flex-col main-container px-[64px] w-1/2">
      <h1 className="text-4xl font-bold self-start title">It's time!</h1>
      <ClockContainer />
    </div>
  );
}

function ClockContainer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const amPm = time.getHours() < 12 ? "AM" : "PM";

  return (
    <div className="flex flex-col self-center w-[300px] p-[8px] clock-container">
      <div className="flex flex-row items-s justify-start">
        <span className="text-6xl mt-[8px] font-bold text-white">
          {formattedTime}
        </span>
        <span className=" text-base font-thin text-white self-start ml-auto">
          {amPm}
        </span>
      </div>
      <div className="self-center mt-4">
        <Image src="/ic_clock.svg" alt="clock" width={40} height={40} />
      </div>
      <div className="text-xs text-white self-center mt-6">{formattedDate}</div>
    </div>
  );
}
