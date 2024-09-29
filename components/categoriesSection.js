// components/CategoriesSection.js
"use client"
import { useEffect, useState } from 'react';
import client from '@/sanityClient';
import Link from 'next/link';

const CategoriesSection = () => {
  const [categories, setCategories] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    client
      .fetch('*[_type == "category"]{ _id, name, _ref }')
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
     console.log(categories)
  }, []);

  const visibleCategories = showMore ? categories : categories.slice(0, 8);

  return (
    <div className="container mx-auto mt-10 px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">Top categories</h2>
        {!showMore && categories.length > 8 && (
          <button
            className="text-blue-500 font-semibold focus:outline-none"
            onClick={() => setShowMore(true)}
          >
            More Categories &gt;&gt;&gt;
          </button>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {visibleCategories.map((category) => (
          <Link key={category._id} href={`/categories/${category._id}/${encodeURIComponent(category.name)}`} legacyBehavior>
            <a className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg block text-center">
              <h3 className="text-xl font-bold">{category.name} {category._ref}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
