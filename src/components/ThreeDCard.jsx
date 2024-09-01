"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo({ id }) {
  const [product, setProduct] = useState([]);

  //API for getting single product
  const fetchProduct = async () => {
    const getProductDataURL = `https://dummyjson.com/products/${id}`;

    try {
      const response = await fetch(getProductDataURL);

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const productData = await response.json();
      // console.log(productData);
      setProduct(productData || []);
    } catch (error) {
      console.error("Error occurred during fetching products:", error);
    }
  };
  fetchProduct();

  const productImage = product?.thumbnail;
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {product?.title}
        </CardItem>
        <CardItem
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {product?.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={productImage}
            height={300}
            width={300}
            className="rounded-xl group-hover/card:shadow-xl"
            alt={product.title || "Product image"}
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Buy now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Delete Product
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
