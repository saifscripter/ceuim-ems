"use client";
import { useEffect, useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  let _hours = date.getHours();
  _hours = _hours > 12 ? _hours - 12 : _hours;

  const hours = _hours.toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  const AMPM = date.getHours() > 12 ? "PM" : "AM";

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
