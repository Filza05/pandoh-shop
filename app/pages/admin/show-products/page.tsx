import React from "react";
import ProductTable from "@/app/components/ProductsTableAdmin"; 
// import { useSelector } from "react-redux";

const page = () => {
//   const productsFromStore = useSelector(
//     (state) => state.products.products
//   );

  return (
    <div className="p-10 mt-[70px] w-full">
      <ProductTable
        // products={productsFromStore}
      />
    </div>
  );
};

export default page;
