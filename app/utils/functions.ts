import { AddProductFormData, ObjectWithoutImages } from "../types/types";

export const trimCreateProductFormData = (
  product: AddProductFormData
): AddProductFormData => {
  product = {
    ...product,
    productname: product.productname.trim(),
    description: product.description.trim(),
  };

  return product;
};

export const createFormData = (data: AddProductFormData) => {
  const formData = new FormData();
  for (let i = 0; i < data.images!.length; i++) {
    formData.append("images", data.images![i]);
  }
  
  console.log(data)
  const tempObject: ObjectWithoutImages = { ...data };

  Object.entries(tempObject).map(([key, value]) => {
    return formData.append(key.toString(), value as string);
  });

  for (const [key, value] of formData.entries()) { 
  console.log(`${key}: ${value}`);
  }
  return formData;
};
