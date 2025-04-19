import React from "react";

interface FormWrapperProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const FormWrapper: React.FC<FormWrapperProps> = ({ title, subtitle, children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">{title}</h2>
        {subtitle && <p className="text-sm text-center text-gray-500 mt-1">{subtitle}</p>}
        <div className="mt-6">{children}</div>
      </div>
    </div>
  );
};

export default FormWrapper;
