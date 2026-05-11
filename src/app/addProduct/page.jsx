"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  ImageIcon,
  Tag,
  Wifi,
  DollarSign,
  Calendar,
  Layers,
  FileText,
} from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddProductForm() {

    const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    image: "",
    full_description: "",
    brand: "",
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
        // alert("✅ Product Added Successfully");
        Swal.fire({
          icon: "success",
          title: "Product Added",
          text: "Your product has been added successfully!",
        });

        setFormData({
          title: "",
          image: "",
          full_description: "",
          brand: "",
          connectivity: "",
          noise_cancellation: false,
          related_items: "",
          price: "",
          date: "",
          category: "",
        });

        router.push("/");
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-slate-800">
            Add New Product
          </h1>

          <p className="text-slate-500 mt-3 text-lg">
            Upload and manage your latest tech products
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-xl border border-sky-100 shadow-2xl rounded-[30px] p-6 md:p-10"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Product Title */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <Cpu size={18} />
                Product Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Apple Airpods Pro"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Image */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <ImageIcon size={18} />
                Image URL
              </label>

              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://image-url.com"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Brand */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <Tag size={18} />
                Brand
              </label>

              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Sony / Apple / Samsung"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Connectivity */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <Wifi size={18} />
                Connectivity
              </label>

              <input
                type="text"
                name="connectivity"
                value={formData.connectivity}
                onChange={handleChange}
                placeholder="Bluetooth 5.3"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Price */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <DollarSign size={18} />
                Price
              </label>

              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="$299"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Category */}
            <div>
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <Layers size={18} />
                Category
              </label>

              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Headphone"
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>

            {/* Date */}
            <div className="md:col-span-2">
              <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
                <Calendar size={18} />
                Release Date
              </label>

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              />
            </div>
          </div>

          {/* Description */}
          <div className="mt-6">
            <label className="flex items-center gap-2 text-slate-700 font-semibold mb-2">
              <FileText size={18} />
              Full Description
            </label>

            <textarea
              name="full_description"
              value={formData.full_description}
              onChange={handleChange}
              rows="5"
              placeholder="Write detailed product description..."
              className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100 resize-none"
            />
          </div>

          {/* Related */}
          <div className="mt-6">
            <label className="text-slate-700 font-semibold mb-2 block">
              Related Items (comma separated)
            </label>

            <input
              type="text"
              name="related_items"
              value={formData.related_items}
              onChange={handleChange}
              placeholder="Mouse, Keyboard, Charger"
              className="w-full rounded-2xl border border-sky-100 bg-white px-5 py-3 text-slate-700 outline-none transition-all duration-300 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            />
          </div>

          {/* Checkbox */}
          <div className="mt-6">
            <label className="flex items-center gap-3 text-slate-700 font-semibold">
              <input
                type="checkbox"
                name="noise_cancellation"
                checked={formData.noise_cancellation}
                onChange={handleChange}
                className="w-5 h-5 accent-sky-500"
              />

              Noise Cancellation
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full mt-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-sky-300 transition-all duration-300"
          >
            🚀 Add Product
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}