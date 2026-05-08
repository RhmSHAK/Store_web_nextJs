import Image from "next/image";
import Link from "next/link";

import {
  FiArrowLeft,
  FiTag,
  FiCalendar,
  FiDollarSign,
} from "react-icons/fi";

const ProductDetailsCard = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  const product = await res.json();
  console.log(product)

  const {
    title,
    image,
    full_description,
    key_information,
    related_items,
    additional_info,
  } = product;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">

      {/* Back Button */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6"
      >
        <FiArrowLeft />
        Back to Products
      </Link>

      {/* Main Card */}
      <div className="grid md:grid-cols-2 gap-8 bg-base-100 shadow-2xl rounded-3xl overflow-hidden">

        {/* Product Image */}
        <div className="relative h-[350px] md:h-full min-h-[400px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-8 flex flex-col gap-6">

          {/* Title + Meta */}
          <div>
            <h1 className="text-4xl font-bold">{title}</h1>

            <div className="flex flex-wrap gap-4 mt-4 text-gray-500">

              <span className="flex items-center gap-1">
                <FiDollarSign />
                {additional_info?.price}
              </span>

              <span className="flex items-center gap-1">
                <FiCalendar />
                {additional_info?.date}
              </span>

              <span className="flex items-center gap-1">
                <FiTag />
                {additional_info?.category}
              </span>

            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Description
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {full_description}
            </p>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Specifications
            </h2>

            <div className="space-y-2">

              {key_information &&
                Object.entries(key_information).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between border-b pb-2"
                  >
                    <span className="font-medium capitalize">
                      {key}
                    </span>
                    <span className="text-gray-500">{value}</span>
                  </div>
                ))}
            </div>
          </div>

          {/* Related Items */}
          {related_items?.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-3">
                Related Items
              </h2>

              <div className="flex flex-wrap gap-3">
                {related_items.map((item, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-lg"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;