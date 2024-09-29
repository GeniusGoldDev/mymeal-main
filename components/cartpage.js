"use client"
import { useCart } from '@/CartContext';
import { useRouter } from 'next/navigation';
import AlertModal from './alerModal'; 
import React, { useState } from 'react';
import Link from 'next/link';
import {PaymentElement} from '@stripe/react-stripe-js';




const CartPage = () => {
  // const { selectedItems } = useCart();
  let storedJsonArray = localStorage.getItem('objectArray');
  let selectedItems = JSON.parse(storedJsonArray);
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const calculateTotal = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0);
  };

  //const price = item.price
/*
  const handleCheckout = () => {
    if (selectedItems.length > 0) {
      router.push(`/checkout/${total}`); 
    } else {    
     setIsAlertOpen(true);
    }
  };
*/

  return (
    <div>
      <div className="container mx-auto p-6 h-screen">
        <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {selectedItems.map((item) => (
              <div key={item._id} className="border p-4 rounded-lg shadow-md mb-4">
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-600">Price: £{item.price}</p>
              </div>
            ))}
          </div>
          <div>
            <div className="border p-4 rounded-lg shadow-md">
              <p className="font-semibold">Total:</p>
              <p className="text-gray-600">£{calculateTotal()}</p>
            </div>
            <Link href={`/checkout/${calculateTotal()}`}>
              <button
                className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Checkout
              </button>
            </Link>
            <AlertModal
        isOpen={isAlertOpen}
        onRequestClose={() => setIsAlertOpen(false)}
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;


