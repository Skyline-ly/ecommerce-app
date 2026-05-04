import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import navbarMenu from "../data/navbar";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState(null);

  const handleToggle = (id) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center text-xs py-2">
        Free Shipping Worldwide 🔥
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold">
          MyShop
        </Link>

        {/* MENU */}
        <div className="hidden md:flex gap-8 relative">

          {navbarMenu.map((cat) => (
            <div key={cat.id} className="relative">

              {/* CLICK BUTTON */}
              <button
                onClick={() => handleToggle(cat.id)}
                className="text-sm text-gray-600 hover:text-black font-medium"
              >
                {cat.name}
              </button>

              {/* POPUP MENU */}
              <AnimatePresence>
                {activeMenu === cat.id && (
                  <>
                    {/* BACKDROP (click outside to close) */}
                    <div
                      className="fixed inset-0"
                      onClick={() => setActiveMenu(null)}
                    />

                    {/* POPUP */}
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="
                        absolute left-0 top-10
                        w-[520px] bg-white shadow-2xl
                        rounded-2xl p-6 grid grid-cols-2 gap-6
                      "
                    >

                      {/* LEFT LINKS */}
                      <div className="space-y-3">
                        {cat.items.map((item, i) => (
                          <Link
                            key={i}
                            to={`/category/${cat.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="block text-gray-600 hover:text-black transition"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>

                      {/* RIGHT IMAGE */}
                      <div className="rounded-xl overflow-hidden">
                        <img
                          src={cat.image}
                          className="h-full w-full object-cover"
                        />
                      </div>

                    </motion.div>
                  </>
                )}
              </AnimatePresence>

            </div>
          ))}

        </div>

        {/* CART */}
        <Link to="/cart" className="relative">

          <div className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition">
            🛒
          </div>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 rounded-full">
              {cart.length}
            </span>
          )}

        </Link>

      </div>
    </nav>
  );
}