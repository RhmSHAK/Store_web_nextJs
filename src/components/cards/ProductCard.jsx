"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FiInfo, FiTrash2 } from "react-icons/fi";

const ProductCard = ({ product, onDelete }) => {

  const handleDelete = async () => {

    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    
    onDelete(product._id);

    try {

      const res = await fetch(
        `/api/products/${product._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if(data.success) {
        alert("Product deleted successfully!");
      }

      // optional rollback if fail
      // if (!data.success) {
      //   alert("Delete failed!");
      // }

    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="card bg-base-100 border-amber-200 shadow-xl hover:shadow-2xl transition w-full">

      <figure>
        <Image
          width={400}
          height={300}
          src={product.image}
          alt={product.title}
          className="h-48 w-full object-cover"
        />
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {product.title}
        </h2>

        <p className="text-sm text-gray-500 line-clamp-2">
          {product.fullDescription}
        </p>

        <div className="card-actions justify-between mt-3">

          <Link
            href={`/products/${product._id}`}
            className="btn btn-primary btn-sm gap-2"
          >
            <FiInfo />
            View Details
          </Link>

          <button
            onClick={handleDelete}
            className="btn btn-error btn-sm gap-2"
          >
            <FiTrash2 />
            Delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;