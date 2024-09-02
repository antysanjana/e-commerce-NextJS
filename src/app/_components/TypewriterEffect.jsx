"use client";
import { TypewriterEffectSmooth } from "../../components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Welcome to E-commerce Website.",
      className: "text-blue-500 dark:text-red-300",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The world of exciting and exclusive products!
      </p>
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
