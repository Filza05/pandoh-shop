import { SignInFormData, HookType } from "../types/types";
import axiosInstance from "../axios/axios";
import { AxiosResponse } from "axios";
import { useState } from "react";

type HandleSignInFormSubmit = (signInFormData: SignInFormData) => void;

type response = {
  handleSignInFormSubmit: HandleSignInFormSubmit;
};

const useSignIn: HookType<response> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function handleSignInFormSubmit(formData: SignInFormData) {
    try {
    setIsLoading(true)
    const response: AxiosResponse = await axiosInstance.post("/sign-in-user", formData)
    setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return { handleSignInFormSubmit }; // Return useful state
};

export default useSignIn;
