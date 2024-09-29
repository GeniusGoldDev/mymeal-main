import React, { useContext } from 'react';

import { useCart } from '@/CartContext';
import { useRouter } from 'next/navigation';

const PaymentPage = () => {
  const { selectedItems } = useCart();
  const router = useRouter();

  const totalPrice = selectedItems.reduce((total, item) => total + item.price, 0);

  const handlePayment = () => {
  
    Alert('Payment successful');
    router.push('/success'); 
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Payment</h1>
      <div className="border p-4 rounded-lg shadow-md">
        <p className="font-semibold">Total Amount: £{totalPrice}</p>
      </div>
      <button
        className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        onClick={handlePayment}
      >
        Proceed to Payment
      </button>
    </div>
  );
};

export default PaymentPage;
