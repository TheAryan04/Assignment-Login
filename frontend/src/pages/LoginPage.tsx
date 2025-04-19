// src/pages/LoginPage.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/Input";
import { useLogin } from "../hooks/useLogin";
import { LoginFormData, loginSchema } from "@/schemas/loginSchema";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    mutate(data);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 w-96 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Welcome Back!</h2>
        <Input
          type="email"
          register={register("email")}
          error={errors.email?.message}
          placeholder="UID"
        />
        <Input
          type="password"
          register={register("password")}
          error={errors.password?.message}
          placeholder="Password"
        />
        {isError && (
          <p className="text-sm text-red-500">
            {(error as any)?.response?.data?.message || "Login failed"}
          </p>
        )}
        <button
          type="submit"
          className="bg-[#2B3A67] text-white w-full py-2 rounded hover:bg-[#1f2b4d] transition"
          disabled={isPending}
        >
          {isPending ? "Logging in..." : "Login"}
        </button>
        <span className="text-center">Doesn't have an account?
            <Link to="/signup" className="text-blue-600">Signup</Link>
        </span>
      </form>
    </div>
  );
};
