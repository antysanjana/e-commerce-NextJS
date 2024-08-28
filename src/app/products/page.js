import { BentoGridDemo } from "@/components/BentoGrid";
import React from "react";

export default async function page() {
  return (
    <div className="flex flex-col">
      <h1 className="relative py-6 z-10 md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-semibold">
        Our Products
      </h1>
      <BentoGridDemo />
    </div>
  );
}
