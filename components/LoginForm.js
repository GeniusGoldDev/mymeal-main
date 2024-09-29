import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'; 
import { useRouter } from 'next/navigation';
import firebase from '@/firebase';

const LoginForm = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = async (data) => {

    try {
      const auth = getAuth();
      // Authenticate user using Firebase Authentication
      await signInWithEmailAndPassword(auth, data.email, data.password);
      console.log('User logged in successfully.');
      
      setIsLoggedIn(true); 

      //if(isLoggedIn === true){

        //alert("User logged in")

        router.push('/welcome'); 

    //}

    } catch (error) {
      console.error('Login error:', error.message);
      // Handle login error, show error message to user, etc.
    }

    

  };

  return (
    <div className="flex items-center justify-center h-auto">
      <form className="w-full max-w-md p-6 rounded-lg shadow-md" onSubmit={handleSubmit(handleFormSubmit)}>
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
          Login
        </button>
      </form>
      {/*}{isLoggedIn && <div className="mt-4 text-green-600">Logged in successfully!</div>}{*/}
    </div>
  );
};

export default LoginForm;
