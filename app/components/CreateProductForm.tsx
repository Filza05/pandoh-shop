import React from 'react'
import { AddProductFormData } from '../types/types';
import { ProductCategoriesType } from '../constants/Enums';
import useProduct from '../hooks/useProducts';

/*
PANDOH GAPPEN
*/
type CreateProductFormProps = {
    setAddProductFormData: React.Dispatch<React.SetStateAction<AddProductFormData>>
    addProductFormData: AddProductFormData
    productCategories: ProductCategoriesType
}

const CreateProductForm: React.FC<CreateProductFormProps> = ({setAddProductFormData, addProductFormData, productCategories}) => {
    const {handleCreateProductFromSubmit} = useProduct()

    return (
        <form
        onSubmit={(event)=> {
            event.preventDefault()
            handleCreateProductFromSubmit(addProductFormData)
        }}
        className="px-10 py-5 rounded-[8px] shadow-xl shadow-slate-400 w-[60%] text-[14px]"
        >
          <div className="mb-4">
            <label
              htmlFor="productName"
              className="block text-gray-700"
            >
              Product Name:
            </label>
            <input
              onChange={(event) => {setAddProductFormData({...addProductFormData, productname: event.target.value})}}
              required
              id="productName"
              type="text"
              className="form-input mt-1 block w-full border px-4 py-2 border-gray-300"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productImage"
              className="block text-gray-700"
            >
              Product Image:
            </label>
            <div className="border border-gray-300 px-4 py-2">
                <input
                onChange={(event) => {setAddProductFormData({...addProductFormData, images: event.target.files})}}
                type="file" id="productImages" name="productImages" accept="image/*" multiple />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="productPrice"
              className="block text-gray-700"
            >
              Product Price:
            </label>
            <input
              onChange={(event) => {setAddProductFormData({...addProductFormData, price: Number(event.target.value)})}}
              id="productPrice"
              type="number"
              className="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              placeholder="Enter product price"
              min={0}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="productCategory"
              className="block text-gray-700"
            >
              Product Category:
            </label>
            <div className="relative">
              <select
                className="form-input mt-1 block w-full border border-gray-300 px-4 py-2"
              >
                {Object.entries(productCategories).map(([key, value]) => {
                    return (
                        <option>
                            {value}
                        </option>
                    )
                })}
                
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="productDescription"
              className="block text-gray-700"
            >
              Product Description:
            </label>
            <textarea
                onChange={(event) => {setAddProductFormData({...addProductFormData, description: event.target.value})}}
                id="productDescription"
                className="form-textarea mt-1 block w-full border border-gray-300 px-4 py-2 resize-none" //mottu resizeable rehne dete na...
                rows={4}
                placeholder="Enter product description "
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      );
}

export default CreateProductForm
