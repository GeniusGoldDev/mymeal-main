
"use client"



import React from 'react';
import { useRouter } from 'next/router';
import client from '@/sanityClient';
import Image from 'next/image';

const FoodSinglePage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [foodItem, setFoodItem] = React.useState(null);

  React.useEffect(() => {
    if (slug) {
      client
        .fetch(
          `*[_type == "foodItem" && slug.current == $slug] {
            _id,
            name,
            description,
            price,
            category->name,
            image {
              asset-> {
                url
              }
            }
          }`,
          { slug }
        )
        .then((data) => {
          if (data.length > 0) {
            setFoodItem(data[0]);
          } else {
            setFoodItem(null);
          }
        })
        .catch((error) => console.error('Error fetching food item:', error));
    }
  }, [slug]);

  if (!foodItem) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:col-span-1">
          <Image
            src={foodItem.image.asset.url}
            alt={foodItem.name}
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:col-span-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">{foodItem.name}</h2>
          <p className="text-gray-600 mb-6">{foodItem.description}</p>
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-semibold">Price: £{foodItem.price}</p>
            <p className="text-gray-800 font-semibold">Category: {foodItem.category.name}</p>
          </div>
          <button className="bg-blue-500 text-white font-bold px-6 py-3 mt-6 rounded-lg shadow-md hover:shadow-lg transition-shadow focus:outline-none">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodSinglePage;
