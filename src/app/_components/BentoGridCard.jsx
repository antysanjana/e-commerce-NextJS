"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid";
import { useState, useEffect } from "react";

export function BentoGridCard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //API for getting all products
    const fetchProducts = async () => {
      const getProductsURL = "https://dummyjson.com/products";

      try {
        const response = await fetch(getProductsURL, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }

        const data = await response.json();

        setItems(data.products || []); // Assuming the API returns a `products` field
      } catch (error) {
        console.error("Error occurred during fetching products:", error);
      }
    };
    fetchProducts();
  }, []); // Empty dependency array means this runs once when the component mounts

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
