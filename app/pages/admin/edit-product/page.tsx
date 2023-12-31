"use client";
import React from "react";
import CreateProductForm from "../../../components/CreateProductForm";
import { ProductCategories } from "../../../constants/Enums";
import { useState } from "react";
import { AddProductFormData } from "../../../types/types";

function page() {
  const [createProductFormData, setCreateProductFormData] =
    useState<AddProductFormData>({
      productname: "",
      description: "",
      price: 0,
      images: [],
      category: ProductCategories.LAPTOP,
    });

  return (
    <section className="flex flex-col items-center mt-4">
      <h1 className="text-3xl">Edit Product</h1>
      <CreateProductForm
        addProductFormData={createProductFormData!}
        setAddProductFormData={setCreateProductFormData!}
        productCategories={ProductCategories}
      />
    </section>
  );
}

export default page;
