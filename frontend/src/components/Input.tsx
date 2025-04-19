// src/components/Input.tsx
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: UseFormRegisterReturn;
}

export const Input = ({ register, error, ...rest }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        {...register}
        {...rest}
        className="p-2 border rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
