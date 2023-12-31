
import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../slices/products';
import { useStore } from 'react-redux';
import usersReducer from '../slices/user';

const store = configureStore({
  reducer: {
    products: productsReducer,
    user: usersReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
