import { useState } from "react";
import { motion } from "framer-motion";
import categories from "../data/categories";
import products from "../data/products";
import ProductCard from "./ProductCard";

export default function Categories() {
  const [active, setActive] = useState("all");

  const filteredProducts =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">

      {/* TITLE */}
      <h2 className="text-2xl font-bold mb-6">
        Shop by Category
      </h2>

      {/* CATEGORY BUTTONS */}
      <div className="flex gap-3 flex-wrap mb-8">

        <button
          onClick={() => setActive("all")}
          className={`px-4 py-2 rounded-full border transition ${
            active === "all"
              ? "bg-black text-white"
              : "bg-white"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-4 py-2 rounded-full border transition ${
              active === cat.id
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {cat.name}
          </button>
        ))}

      </div>

      {/* CATEGORY GRID (VISUAL CARDS) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">

        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(cat.id)}
            className={`
              cursor-pointer rounded-2xl overflow-hidden border
              ${active === cat.id ? "border-black" : "border-gray-100"}
            `}
          >
            <img
              src={cat.image}
              className="h-32 w-full object-cover"
            />
            <div className="p-3 text-center font-medium">
              {cat.name}
            </div>
          </motion.div>
        ))}

      </div>

      {/* PRODUCTS (DYNAMIC) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>
  );
}