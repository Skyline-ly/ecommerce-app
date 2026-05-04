import Hero from "../components/Hero";
import Categories from "../components/Categories";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="bg-white">

      {/* TOP BAR */}
      <div className="bg-black text-white text-center text-sm py-2">
        Summer Sale 🔥 Up to 70% OFF
      </div>

      {/* HERO */}
      <Hero />

      {/* CATEGORIES */}
      <Categories />

      {/* NEW ARRIVALS (REAL DATA) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">New Arrivals</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* DISCOUNT BANNER */}
      <section className="bg-red-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-600">
          Flash Sale - Up to 70% OFF
        </h2>
        <p className="text-gray-600 mt-2">
          Limited time offer on selected items
        </p>
      </section>

      {/* BEST SELLERS (REAL DATA) */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">Best Sellers</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}