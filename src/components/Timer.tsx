"use client";

import { useEffect, useState } from "react";

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div suppressHydrationWarning className="inline text-secondary p-4">
      {currentTime.toLocaleTimeString()}
    </div>
  );
}
