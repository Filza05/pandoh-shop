import { SignUpFormData, HookType } from "../types/types"
import axiosInstance from "../axios/axios"
import { useState } from "react"

type response = {
    handleSignUpFormSubmit: (formData: SignUpFormData) => void
}

const useSignUp: HookType<response> = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    async function handleSignUpFormSubmit(formData: SignUpFormData) {
        try {
            setIsLoading(true)
            const response = await axiosInstance.post("/sign-up-user", formData)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    return {handleSignUpFormSubmit}
}

export default useSignUp