"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import client from '@/sanityClient';
import { useCart } from '@/CartContext'; // Adjust the path

const FoodSection = () => {
  const [foodItems, setFoodItems] = useState([]);
  const { selectedItems, setSelectedItems } = useCart();

  async function fetchFoodItems(){

    try {

      client
      .fetch(
        `*[_type == "foodItem"]{
          _id,
          name,
          price,
          slug {
            current
          },
          "image": image.asset->url
        }`
      )
      .then((data) => setFoodItems(data))
      .catch((error) => console.error('Error fetching food items:', error));

    }catch(error){

      console.log(error)

    }

  }

  fetchFoodItems()

  const addToCart = (food) => {

    setSelectedItems([...selectedItems, food]);

    let jsonArray = JSON.stringify(selectedItems);
    localStorage.setItem('objectArray', jsonArray);

  };


  return (
    <div className="container mx-auto mt-10 px-8">
      <h2 className="text-3xl font-bold mb-4">Featured meal</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        {foodItems.map((food) => (
          <div key={food._id} className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg hover:shadow-xl transition-shadow">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold mb-2">{food.name}</h3>
            <p className="text-gray-600 mb-2">£{food.price}</p>
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md focus:outline-none"
              onClick={() => addToCart(food)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-md">
        <Link href="/cart" passHref legacyBehavior>
          <a className="cursor-pointer">
            <p className="font-semibold">Cart ({selectedItems.length})</p>
            <p className="text-gray-600">
              Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FoodSection;



 


