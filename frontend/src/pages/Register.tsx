import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormWrapper from "@/components/FormWrapper";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { registerSchema } from "@/schemas/registerSchema";
import { Link, useNavigate } from "react-router-dom";

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate();

  const { mutateAsync, status } = useMutation({
    mutationFn: async (data: RegisterFormData) => {
      const response = await axios.post("http://localhost:5000/api/users/register", data);
      return response.data;
    },
    onError: (error: any) => {
      alert(error?.response?.data?.message || "Something went wrong");
    },
    onSuccess: (_data) => {
      alert("Registered successfully!");
      navigate("/");
    },
  });
  
  const isLoading = status === "pending";
  

  const onSubmit = async (data: RegisterFormData) => {
    await mutateAsync(data);
  };

  return (
    <FormWrapper title="Register" subtitle="Create your account">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            type="text"
            {...register("name")}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Your Name"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter Your Password"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="bg-[#2B3A67] text-white w-full py-2 rounded hover:bg-[#1f2b4d] transition"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
        <span className="text-center">Already have an account?
            <Link to="/login" className="text-blue-600">Login</Link>
        </span>
      </form>
    </FormWrapper>
  );
};

export default Register;
