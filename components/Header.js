import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className='bg-slate-200'>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between ">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 order-1 md:order-2">
          <img
            src="images/jollof.png"
            alt="Hero Image"
            className="h-[400px] w-auto"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 px-8 order-2 md:order-1 py-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 py-6">
            Welcome to My Meal Food App
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover the best Food products and Meals here!
          </p>
          <a
            href="/shop"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
             <button className="bg-blue-500 text-white font-bold px-6 py-2 rounded-md focus:outline-none">
            Explore Now
          </button>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Home;
