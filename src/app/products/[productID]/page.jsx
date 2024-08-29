import React from "react";
import { ThreeDCardDemo } from "@/components/ThreeDCard";
export default function page({ params }) {
  return (
    <div>
      Product Details of product {params.productID}
      <ThreeDCardDemo id={params.productID} />
    </div>
  );
}
