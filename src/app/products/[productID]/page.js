/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { ThreeDCardDemo } from "@/app/_components/ThreeDCard";
export default function page({ params }) {
  return (
    <div>
      <ThreeDCardDemo id={params.productID} />
    </div>
  );
}
