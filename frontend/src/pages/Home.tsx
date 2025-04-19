import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Dashboard 🎉</h1>
      <p className="text-lg text-center max-w-md">
        You have successfully logged in! This is a protected route. Add your main app content here.
      </p>
    </div>
  );
};

export default Home;
