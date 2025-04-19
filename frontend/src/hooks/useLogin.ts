import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/auth";
import { LoginResponse } from "../types/auth.d";
import { LoginFormData } from "@/schemas/loginSchema";

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginFormData>({
    mutationFn: loginUser,
  });
};