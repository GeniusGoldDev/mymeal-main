"use client";
import { useState } from 'react';
import LoginForm from '@/components/LoginForm';
import RegisterForm from '@/components/RegisterForm';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleFormSubmit = (data) => {
    // Handle form submission based on isLogin value
    console.log('Form submitted:', isLogin ? 'Login' : 'Register', data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">{isLogin ? 'Login' : 'Register'}</h1>
        {isLogin ? (
          <LoginForm onSubmit={handleFormSubmit} />
        ) : (
          <RegisterForm onSubmit={handleFormSubmit} />
        )}
        <button
          onClick={toggleForm}
          className="mt-4 text-blue-500 cursor-pointer mx-auto flex justify-center"
        >
          {isLogin ? 'No Account - Register Here!' : 'Already registered  - Click to Login!'}
        </button>
      </div>
    </div>
  );
};

export default LoginRegister;
