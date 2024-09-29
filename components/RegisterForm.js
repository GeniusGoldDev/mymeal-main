import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import sanityClient from '@/sanityClient';
import firebase from '@/firebase';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleFormSubmit = async (data) => {
    try {
      // Create user using Firebase Authentication
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log('User registered successfully.');

      // Create user entry in Sanity
      const newUser = {
        _type: 'user', 
        username: data.username,
        email: data.email,
        firebaseUid: userCredential.user.uid,
      };

      await sanityClient.create(newUser);
      console.log('User added to Sanity schema.');

      setRegistrationSuccess(true); 

    } catch (error) {
      console.error('Registration error:', error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-auto">
       <form className="w-full max-w-md p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
        {registrationSuccess ? (
          <div className="mb-4 text-green-600">
            Registration successful! Please login now.
          </div>
        ) : null}
        <div className="mb-4">
          <label className="block text-sm font-semibold">Username</label>
          <input
            type="text"
            name="username"
            {...register('username', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.username && <span className="text-red-500 text-sm">Username is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            {...register('email', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            name="password"
            {...register('password', { required: true })}
            className="w-full p-2 border rounded-md"
          />
          {errors.password && <span className="text-red-500 text-sm">Password is required</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
