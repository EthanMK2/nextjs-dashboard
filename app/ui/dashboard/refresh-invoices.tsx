"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RefreshInvoices() {
  const [seconds, setSeconds] = useState<number>(0);
  const [updatedString, setUpdatedString] = useState<string>("just now");
  useEffect(() => {
    const timePassedInterval = setInterval(() => {
      setSeconds((prev) => {
        const newSeconds = prev + 1
        return newSeconds;
      })
      if (seconds >= 60) {
        setUpdatedString(`${Math.floor(seconds / 60)}m ago`)
      }
    }, 1000)
    return () => {
      clearInterval(timePassedInterval);
    }
  }, [seconds])



  const router = useRouter();

  return <button onClick={() => {
    router.refresh();
    setSeconds(0);
    setUpdatedString("just now")
  }} className="ml-2 text-sm text-gray-500 hover:underline hover:text-blue-500">Updated {updatedString}</button>
}
