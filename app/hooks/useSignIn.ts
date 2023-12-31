import { SignInFormData, HookType } from "../types/types";
import axiosInstance from "../axios/axios";
import { AxiosResponse } from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser, selectUser } from "../redux/slices/user";
import { useState } from "react";

type HandleSignInFormSubmit = (signInFormData: SignInFormData) => void;

type response = {
  handleSignInFormSubmit: HandleSignInFormSubmit;
};

const useSignIn: HookType<response> = () => {
  const dispatch = useDispatch()
  async function handleSignInFormSubmit(formData: SignInFormData) {
    try {
    const response: AxiosResponse = await axiosInstance.post("/sign-in-user", formData)
    dispatch(addUser(response.data.signedInUser))

    } catch (error) {
      console.log(error)
    }
  }

  return { handleSignInFormSubmit }
};

export default useSignIn;
