import { HookType, AddProductFormData } from "../types/types";
import axiosInstance from "../axios/axios";
import { useState } from "react";
import { trimCreateProductFormData } from "../utils/functions";

type HandleCreateProductFromSubmit = (addProductFormData: AddProductFormData) => void;

type response = {
    handleCreateProductFromSubmit: HandleCreateProductFromSubmit;
};

const useProduct: HookType<response> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleCreateProductFromSubmit: HandleCreateProductFromSubmit = (addProductFormData) => {
    try {
        addProductFormData = trimCreateProductFormData(addProductFormData)
        axiosInstance.post("/add-product", addProductFormData)
    } catch (error) {
        console.log(error)
    }
  }

  return { handleCreateProductFromSubmit };
};

export default useProduct;