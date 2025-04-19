import { LoginFormData } from "@/schemas/loginSchema";
import axios from "axios";

export const loginUser = async (data: LoginFormData) => {
  const response = await axios.post("http://localhost:5000/api/users/login", data);
  return response.data;
};
