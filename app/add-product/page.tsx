"use client";
import React from "react";
import CreateProductForm from "../components/CreateProductForm";
import { useState } from "react";
import { AddProductFormData } from "../types/types";
import { ProductCategories } from "../constants/Enums";

const page = () => {
  const [createProductFormData, setCreateProductFormData] =
    useState<AddProductFormData>({
      productname: "",
      description: "",
      price: 0,
      images: [],
      category: ProductCategories.LAPTOP,
    });

  return (
    <section className="w-full flex flex-col items-center justify-center py-8">
      <h1 className="uppercase text-2xl font-semibold text-slate-700">
        Add Product
      </h1>
      <CreateProductForm
        addProductFormData={createProductFormData!}
        setAddProductFormData={setCreateProductFormData!}
        productCategories={ProductCategories}
      />
    </section>
  );
};

export default page;
