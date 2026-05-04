import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const tagColors = {
    new: "bg-black text-white",
    sale: "bg-red-500 text-white",
    bestseller: "bg-green-600 text-white",
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="
        group relative bg-white border border-gray-100
        rounded-2xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition-all duration-300
      "
    >

      {/* IMAGE SECTION */}
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="relative cursor-pointer overflow-hidden"
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-64 w-full object-cover
            group-hover:scale-110
            transition duration-500
          "
        />

        {/* DARK OVERLAY */}
        <div className="
          absolute inset-0 bg-black/0
          group-hover:bg-black/20
          transition
        " />

        {/* TAG */}
        {product.tag && (
          <span
            className={`
              absolute top-3 left-3 text-xs px-2 py-1 rounded-full
              ${tagColors[product.tag] || "bg-gray-800 text-white"}
            `}
          >
            {product.tag.toUpperCase()}
          </span>
        )}

        {/* QUICK ACTIONS (VERCEL STYLE HOVER) */}
        <div className="
          absolute bottom-3 left-1/2 -translate-x-1/2
          opacity-0 group-hover:opacity-100
          transition flex gap-2
        ">

          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="
              px-4 py-2 text-xs rounded-full
              bg-white text-black
              shadow hover:scale-105 transition
            "
          >
            Add
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id}`);
            }}
            className="
              px-4 py-2 text-xs rounded-full
              bg-black text-white
              hover:scale-105 transition
            "
          >
            View
          </button>

        </div>
      </div>

      {/* INFO SECTION */}
      <div className="p-4">

        <h2 className="text-sm font-medium text-gray-900 line-clamp-1">
          {product.name}
        </h2>

        <div className="flex items-center justify-between mt-2">

          <p className="text-gray-500 text-sm">
            ${product.price}
          </p>

          {/* FAKE RATING STYLE (VERCEL CLEAN LOOK) */}
          <div className="text-xs text-gray-400">
            ★ 4.8
          </div>

        </div>

      </div>
    </motion.div>
  );
}