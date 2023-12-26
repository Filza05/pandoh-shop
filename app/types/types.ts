import { ProductCategoriesType } from "../constants/Enums";

export type SignInFormData = {
  email: string;
  password: string;
};

export type HookType<R> = () => R;

export type SignUpFormData = {
  email: string;
  username: string;
  password: string;
};

export type AddProductFormData= {
  productname: string,
  description: string,
  price: Number,
  category: string,
  images: FileList | null,
}

