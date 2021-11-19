import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div className="p-8 pb-12 mb-8 bg-gray-200 rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 font-semibold bg-gray-200 border-b">
        Categories
      </h3>
    </div>
  );
};

export default Categories;
