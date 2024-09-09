"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getSingleProduct } from "@/api/request";
import { deleteProduct } from "@/api/request";

export function ThreeDCardDemo({ id }) {
  const [product, setProduct] = useState([]);
  const router = useRouter();

  const handleClick = async () => {
    const deletedProductData = await deleteProduct({ id });
    if (deletedProductData?.isDeleted) {
      alert(
        `${deletedProductData.title} Deleted on ${deletedProductData.deletedOn}!!`
      );
      router.push("/products");
    }
    console.log("ID ", id);
    deleteProduct({ id });
  };

  //API for getting single product
  const singleProduct = async () => {
    try {
      const singleProductData = await getSingleProduct(id);
      console.log("Single product: ", singleProductData.data);
      setProduct(singleProductData.data);
    } catch (error) {
      console.error("Error fetching single product:", error);
    }
  };

  useEffect(() => {
    singleProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
