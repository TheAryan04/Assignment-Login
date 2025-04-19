type ButtonProps = {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    loading?: boolean;
  };
  
  const Button = ({ children, type = "button", loading }: ButtonProps) => (
    <button
      type={type}
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
    >
      {loading ? "Loading..." : children}
    </button>
  );
  
  export default Button;
  