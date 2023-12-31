import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/types/product';

interface ProductsState {
  products: Product[]; 
}

const initialState: ProductsState = {
  products: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    setProducts: (state, action: PayloadAction<any>) => {
      //iski type baad ma krte set
      state.products = (action.payload)
    }
  },
});

export const { addProduct } = productsSlice.actions;
export const { setProducts } = productsSlice.actions;
export const selectProducts = (state: { products: ProductsState }) => state.products.products;

const productsReducer = productsSlice.reducer;
export default productsReducer;