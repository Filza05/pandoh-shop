import { SignInFormData, HookType } from "../types/types";
import axiosInstance from "../axios/axios";
import useSWR, { SWRResponse } from "swr";

type HandleSignInFormSubmit = (signInFormData: SignInFormData) => SWRResponse;

type response = {
  handleSignInFormSubmit: HandleSignInFormSubmit;
};

const useSignIn: HookType<response> = () => {
  function handleSignInFormSubmit(signInFormData: SignInFormData) {
    const swrResponse = useSWR(
      "/api/sign-in-user",
      async () => {
        const response = await axiosInstance.post(
          "/sign-in-user",
          signInFormData
        );

        return response.data;
      },
      {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }
    );

    return swrResponse;
  }

  return { handleSignInFormSubmit };
};

export default useSignIn;
