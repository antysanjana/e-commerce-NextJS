"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ThreeDCardDemo({ id }) {
  const [product, setProduct] = useState([]);
  const getProductDataURL = `https://dummyjson.com/products/${id}`;
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch(getProductDataURL, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const deletedProductData = await response.json();

      if (deletedProductData?.isDeleted) {
        alert(
          `${deletedProductData.title} Deleted on ${deletedProductData.deletedOn}!!`
        );
        router.push("/products");
      }
    } catch (error) {
      console.error("Error occurred during fetching products:", error);
    }
  };

  useEffect(() => {
    //API for getting single product
    const fetchProduct = async () => {
      try {
        const response = await fetch(getProductDataURL);

        if (!response.ok) {
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }

        const productData = await response.json();
        setProduct(productData || []);
      } catch (error) {
        console.error("Error occurred during fetching products:", error);
      }
    };
    fetchProduct();
  }, [getProductDataURL, id]);

  const productImage = product?.thumbnail;
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
          {product?.title}
        </CardItem>
        <CardItem className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {product?.description}
        </CardItem>
        <CardItem className="w-full mt-4">
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
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Buy now →
          </CardItem>
          <button
            onClick={handleClick}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Delete Product
          </button>
        </div>
      </CardBody>
    </CardContainer>
  );
}
