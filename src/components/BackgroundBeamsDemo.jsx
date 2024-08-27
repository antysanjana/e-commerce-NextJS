"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import Image from "next/image";

export function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="z-20">
        <Image
          src={"/images/profile.jpg"}
          alt={"image"}
          width={150}
          height={150}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className="relative py-6 z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
          Manager
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          dolorum nostrum deserunt, possimus non deleniti reprehenderit
          expedita, quidem quae corporis placeat cupiditate iure eius
          perferendis beatae tempora officia. Sunt, repellat.
        </p>
        <p className="text-neutral-400 text-center  w-full relative z-10 mt-4  bg-neutral-950">
          hi@manuarora.in
        </p>
      </div>
      <BackgroundBeams />
    </div>
  );
}
