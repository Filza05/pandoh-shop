import { HookType, AddProductFormData } from "../types/types";
import axiosInstance from "../axios/axios";
import { useState } from "react";
import {
  trimCreateProductFormData,
  createFormData,
} from "../utils/functions";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, setProducts } from "../redux/slices/products";

type HandleCreateProductFromSubmit = (
  addProductFormData: AddProductFormData
) => void;

type response = {
  handleCreateProductFromSubmit: HandleCreateProductFromSubmit;
};

const useProduct: HookType<response> = () => {

  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateProductFromSubmit: HandleCreateProductFromSubmit =
    async (addProductFormData) => {
      try {
        addProductFormData = trimCreateProductFormData(addProductFormData);
        const formData = createFormData(addProductFormData);
        const response = await axiosInstance.post("/add-product", formData);
        console.log(response)
      } catch (error) {
        console.log(error);
      }
    };

  const fetchProductsFromDB = async () => {
    try{
      const response = await axiosInstance.get("/get-products");
      dispatch(setProducts(response.data.products))
    }catch(error){
      console.log(error)
    }
  }

  return { handleCreateProductFromSubmit };
};

export default useProduct;
