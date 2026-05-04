import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCartStore } from "../store/cartStore";

export default function ProductDetails() {
  const { id } = useParams();
  const addToCart = useCartStore((state) => state.addToCart);

  // find product by id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-10">

      {/* Image */}
      <img
        src={product.image}
        className="rounded-2xl w-full h-[400px] object-cover"
      />

      {/* Info */}
      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="text-gray-600 mt-4">
          This is a high-quality product with modern design and premium materials.
        </p>

        <p className="text-2xl font-bold mt-4">${product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}