"use client";
import React, { useState, useEffect } from "react";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";
import { getAllProducts } from "@/api/request";
import Image from "next/image";
import { deleteProduct } from "@/api/request";
import { useRouter } from "next/navigation";

export function BackgroundBoxes() {
  const [items, setItems] = useState([]);
  const router = useRouter();

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

  const handleClick = async (id) => {
    console.log("ID ", id);
    const deletedProductData = await deleteProduct(id);
    console.log(deletedProductData);
    if (deletedProductData?.data?.isDeleted) {
      alert(
        `${deletedProductData?.data?.title} Deleted on ${deletedProductData?.data?.deletedOn}!!`
      );
      router.push("/products_table");
    }
  };

  return (
    <div className="h-max scroll-smooth relative w-full overflow-y-auto overflow-x-hidden bg-slate-900 flex flex-col items-center rounded-lg">
      <div className="absolute inset-0 w-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1
        className={cn(
          "md:text-5xl text-10xl font-sans mt-12 font-semibold text-white relative z-20"
        )}
      >
        Our Products
      </h1>
      <table class="w-[1000px] mt-8 mb-8 table-fixed z-40 border-collapse border border-slate-500 text-center scroll-smooth">
        <thead>
          <tr>
            <th className="border border-slate-600">Product</th>
            <th className="border border-slate-600">Category</th>
            <th className="border border-slate-600">Price</th>
            <th className="border border-slate-600">Brand</th>
            <th className="border border-slate-600">Picture</th>
            <th className="border border-slate-600">Delete Product</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id}>
              <td className="border border-slate-600">{item.title}</td>
              <td className="border border-slate-600">{item.category}</td>
              <td className="border border-slate-600">{item.price}</td>
              <td className="border border-slate-600">
                {item.brand || "None"}
              </td>
              <td className="border border-slate-600">
                <Image
                  src={item.thumbnail}
                  width="80"
                  height="80"
                  alt="Product Image"
                ></Image>
              </td>
              <td className="border border-slate-600">
                <button
                  className="bg-transparent border border-gray-400 rounded-xl px-4 py-1"
                  onClick={() => handleClick(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
