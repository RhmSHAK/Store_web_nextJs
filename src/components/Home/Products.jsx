"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "../cards/ProductCard";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      const res = await fetch("/api/products");
      const data = await res.json();

      setProducts(data || []);
    };

    fetchProducts();

  }, []);

  // remove instantly 
  const handleRemoveProduct = (id) => {

    const deleteProduct = products.filter((item) => item._id !== id);
    
    setProducts(deleteProduct);

  };

  return (
    <div className=" mx-auto px-4">

      <h2 className="text-4xl font-bold text-center my-8 text-yellow-400">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            onDelete={handleRemoveProduct}
          />
        ))}

      </div>
    </div>
  );
};

export default Products;