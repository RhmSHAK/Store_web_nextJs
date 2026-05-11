"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function AddProductForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    full_description: "",
    brand: "",
    battery_life: "",
    connectivity: "",
    noise_cancellation: false,
    related_items: "",
    price: "",
    date: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: formData.title,
      image: formData.image,
      full_description: formData.full_description,
      key_information: {
        brand: formData.brand,
        // battery_life: formData.battery_life,
        connectivity: formData.connectivity,
        noise_cancellation: formData.noise_cancellation,
      },
      related_items: formData.related_items.split(","),
      additional_info: {
        price: formData.price,
        date: formData.date,
        category: formData.category,
      },
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Product Added Successfully");

        setFormData({
          title: "",
          image: "",
          full_description: "",
          brand: "",
        //   battery_life: "",
          connectivity: "",
          noise_cancellation: false,
          related_items: "",
          price: "",
          date: "",
          category: "",
        });
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black flex items-center justify-center px-4 py-10">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white">
            Add New Product
          </h1>

          <p className="text-slate-300 mt-2">
            Upload and manage your latest tech products
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Title */}
          <div>
            <label className="label-style">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter product title"
              className="input-style"
            />
          </div>

          {/* Image */}
          <div>
            <label className="label-style">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Paste image link"
              className="input-style"
            />
          </div>

          {/* Brand */}
          <div>
            <label className="label-style">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Apple / Sony / Samsung"
              className="input-style"
            />
          </div>

          {/* Battery */}
          {/* <div>
            <label className="label-style">Battery Life</label>
            <input
              type="text"
              name="battery_life"
              value={formData.battery_life}
              onChange={handleChange}
              placeholder="10 Hours"
              className="input-style"
            />
          </div> */}

          {/* Connectivity */}
          <div>
            <label className="label-style">Connectivity</label>
            <input
              type="text"
              name="connectivity"
              value={formData.connectivity}
              onChange={handleChange}
              placeholder="Bluetooth 5.3"
              className="input-style"
            />
          </div>

          {/* Price */}
          <div>
            <label className="label-style">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="$199"
              className="input-style"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label-style">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Headphone"
              className="input-style"
            />
          </div>

          {/* Date */}
          <div>
            <label className="label-style">Release Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="input-style"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-5">
          <label className="label-style">Full Description</label>

          <textarea
            name="full_description"
            value={formData.full_description}
            onChange={handleChange}
            rows="5"
            placeholder="Write full product description..."
            className="input-style resize-none"
          />
        </div>

        {/* Related */}
        <div className="mt-5">
          <label className="label-style">
            Related Items (comma separated)
          </label>

          <input
            type="text"
            name="related_items"
            value={formData.related_items}
            onChange={handleChange}
            placeholder="Mouse, Keyboard, Charger"
            className="input-style"
          />
        </div>

        {/* Checkbox */}
        <div className="mt-5">
          <label className="flex items-center gap-3 text-slate-200 font-medium">
            <input
              type="checkbox"
              name="noise_cancellation"
              checked={formData.noise_cancellation}
              onChange={handleChange}
              className="checkbox checkbox-primary"
            />

            Noise Cancellation
          </label>
        </div>

        {/* Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-lg hover:opacity-90 transition-all duration-300"
        >
          🚀 Add Product
        </motion.button>
      </motion.form>
    </div>
  );
}