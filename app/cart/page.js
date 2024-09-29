"use client"

import React from 'react';
import CartPage from '@/components/cartpage';

const Cartpage = () => {
  const [selectedItems, setSelectedItems] = React.useState([]); // Initialize selectedItems state here

  return <CartPage selectedItems={selectedItems} />;
};

export default Cartpage;
