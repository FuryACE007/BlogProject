import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="p-8 pb-12 mb-8 rounded-lg shadow-lg bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600">
      <h3 className="pb-4 mb-8 font-semibold border-b">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="block pb-3 mb-3 cursor-pointer">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
