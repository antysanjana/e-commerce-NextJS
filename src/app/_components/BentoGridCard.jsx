"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { useState, useEffect } from "react";
import { getAllProducts } from "@/api/request";

export function BentoGridCard() {
  const [items, setItems] = useState([]);

  //Get all products from api call
  const allProducts = async () => {
    try {
      const allProducts = await getAllProducts();
      console.log("Products API Response: ", allProducts?.data?.products);
      setItems(allProducts?.data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    allProducts(); // Call the function when the component mounts
  }, []);

  return (
    <div>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            itemID={item.id}
            title={item.title}
            description={item.description}
            category={item.category}
            images={item.images}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
