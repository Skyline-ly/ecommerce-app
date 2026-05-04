import { useCartStore } from "../store/cartStore";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="space-y-4">

          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-white p-4 rounded-xl shadow"
            >
              <div>
                <h2 className="font-bold">{item.name}</h2>
                <p>${item.price}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="text-xl font-bold pt-4">
            Total: ${total}
          </div>

        </div>
      )}

    </div>
  );
}