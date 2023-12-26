import { AddProductFormData } from "../types/types";

export const trimCreateProductFormData = (product: AddProductFormData): AddProductFormData => {
    product = {
        ...product,
        productname: product.productname.trim(),
        description: product.description.trim()
    }

    return product
}