"use client"

import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { MicrophoneIcon, XIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/solid';
import { useCart } from '@/CartContext'; 
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVoicePrompt, setIsVoicePrompt] = useState(false);
  const { selectedItems } = useCart();

  return (
    <div className="bg-blue-500 py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
          <span className="text-white ml-2">My Meal</span>
        </div>
        <div className="hidden md:flex items-center">
          <a
            href="/"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Home
          </a>
          <a
            href="/shop"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Shop
          </a>
          <a
            href="/cat"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Categories
          </a>
          <a
            href="/restaurants"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            Restaurants
          </a>
           <a
            href="/about"
            className="text-white hover:text-gray-200 px-4 py-2"
          >
            About
          </a>
        </div>
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none ml-4"
            onClick={() => setIsVoicePrompt(!isVoicePrompt)}
          >
            {isVoicePrompt ? (
              <MicrophoneIcon className="h-6 w-6" />
            ) : (
              <span role="img" aria-label="Accessibility">
                🎤
              </span>
            )}
          </button>
          {/* <a
            href="/cart"
            className="text-white hover:text-gray-200 ml-4"
          ><Link href="/cart" passHref legacyBehavior>
          <a className="cursor-pointer">
            <p className="font-semibold">Cart ({selectedItems.length})</p>
            <p className="text-gray-600">
              Total: £{selectedItems.reduce((total, item) => total + item.price, 0)}
            </p>
          </a>
        </Link>
            <ShoppingBagIcon className="h-6 w-6" />
          </a> */}
          <div className="flex items-center relative">
          <Link href="/cart" passHref legacyBehavior>
            <a className="cursor-pointer">
              <ShoppingBagIcon className="h-6 w-6 text-white" />
            </a>
          </Link>
          <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center absolute -top-1 -right-1">
            {selectedItems.length}
          </span>
        </div>
          <a
            href="/LoginRegister"
            className="text-white hover:text-gray-200 ml-4"
          >
            <UserIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } mt-4 md:hidden`}
      >
      
        <a
          href="/"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Home
        </a>
        <a
          href="/shop"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Shop
        </a>
        <a
          href="/categories"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Categories
        </a>
        <a
          href="/restaurants"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          Restaurants
        </a>
        <a
          href="/about"
          className="block mt-4 text-white hover:text-gray-200 px-4 py-2"
        >
          About
        </a>
      </div>
    </div>
  );
};

export default Navbar;


