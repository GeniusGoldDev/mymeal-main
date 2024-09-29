// components/TopRestaurants.js
"use client"
import { useEffect, useState } from 'react';
import client from '@/sanityClient';
import Image from 'next/image';

const TopRestaurants = () => {
  const [topRestaurants, setTopRestaurants] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "restaurant"] | order(rating desc) [0...8] {
          _id,
          name,
          city,
          cuisine,
          rating,
          "image": image.asset->url,
          website,
          phone
        }`
      )
      .then((data) => setTopRestaurants(data))
      .catch((error) => console.error('Error fetching top restaurants:', error));
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a1 1 0 011 1v3m0 0a1 1 0 01-1 1H8a4 4 0 00-4 4v6a4 4 0 004 4h8a4 4 0 004-4v-6a4 4 0 00-4-4h-5a1 1 0 01-1-1V3a1 1 0 011-1z"
          />
        </svg>
      );
    }

    if (halfStar) {
      stars.push(
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a1 1 0 011 1v3m0 0a1 1 0 01-1 1H8a4 4 0 00-4 4v6a4 4 0 004 4h8a4 4 0 004-4v-6a4 4 0 00-4-4h-5a1 1 0 01-1-1V3a1 1 0 011-1z"
          />
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="container mx-auto mt-8 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-4">Top Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {topRestaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="relative h-40 mb-4">
              <Image
                src={`${restaurant.image}`}
                alt={restaurant.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
            <p className="text-gray-600 mb-2">City: {restaurant.city}</p>
            <p className="text-gray-600 mb-2">Cuisine: {restaurant.cuisine.join(', ')}</p>
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-blue-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 8.293a1 1 0 011.414 0l1.58 1.58A9.99 9.99 0 0110 4a9.99 9.99 0 013.713 5.873l1.58-1.58a1 1 0 111.414 1.414l-1.58 1.58A9.99 9.99 0 0114 16a9.99 9.99 0 01-5.873-3.713l-1.58 1.58a1 1 0 01-1.414-1.414l1.58-1.58A9.99 9.99 0 014 8.002a1 1 0 010-2 9.99 9.99 0 013.707 5.871l-1.58 1.58a1 1 0 01-1.414-1.414l1.58-1.58A9.99 9.99 0 014.293 8.293z"
                  clipRule="evenodd"
                />
              </svg>
              <a href={`tel:${restaurant.phone}`} className="text-blue-500">
                {restaurant.phone}
              </a>
            </div>
            <div className="flex mb-2">{renderStars(restaurant.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRestaurants;




