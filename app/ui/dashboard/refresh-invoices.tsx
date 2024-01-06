"use client";

import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function RefreshInvoices() {
  const [seconds, setSeconds] = useState<number>(0);
  const [updatedString, setUpdatedString] = useState<string>("just now");
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  useEffect(() => {
    setIsUpdating(false);
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
    setIsUpdating(true);
    router.refresh();
    setSeconds(0);
    setUpdatedString("just now")
  }} className="flex flex-row ml-2 text-sm text-gray-500 hover:underline hover:text-blue-500">
    <ArrowPathIcon className={clsx(
      "mr-2 h-5 w-5 text-gray-500",
      {
        'animate-[]': isUpdating == true,
        'animate-[spin_1s_linear_2]': isUpdating == false,
      },
    )}
    />Updated {updatedString}</button>
}
