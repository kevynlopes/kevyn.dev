"use client";

import { useEffect, useState } from "react";

type Props = {
  className?: string;
};

export default function Timer({ className }: Props) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <time
      suppressHydrationWarning
      className={className ?? "inline text-secondary"}
    >
      {currentTime.toLocaleTimeString("pt-BR")}
    </time>
  );
}
