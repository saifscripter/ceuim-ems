"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  let hours = date.getHours();
  const AMPM = hours > 12 ? "PM" : "AM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours.toString().padStart(2, "0");

  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  useEffect(() => {
    const timeId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  return (
    <p className="text-center" suppressHydrationWarning>
      ({hours}:{minutes}:{seconds} {AMPM})
    </p>
  );
}
