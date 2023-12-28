import { HookType, AddProductFormData } from "../types/types";
import axiosInstance from "../axios/axios";
import { useState } from "react";
import {
  trimCreateProductFormData,
  createFormData,
} from "../utils/functions";

type HandleCreateProductFromSubmit = (
  addProductFormData: AddProductFormData
) => void;

type response = {
  handleCreateProductFromSubmit: HandleCreateProductFromSubmit;
};

const useProduct: HookType<response> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateProductFromSubmit: HandleCreateProductFromSubmit =
    async (addProductFormData) => {
      try {
        addProductFormData = trimCreateProductFormData(addProductFormData);
        const formData = createFormData(addProductFormData);

        await axiosInstance.post("/add-product", formData);
      } catch (error) {
        console.log(error);
      }
    };

  return { handleCreateProductFromSubmit };
};

export default useProduct;
