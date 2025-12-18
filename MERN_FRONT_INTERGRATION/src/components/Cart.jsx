import React from "react";

export default function Cart({ cart, setCart }) {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item._id !== id));
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-gradient-to-b from-[#fcf6f6] to-[#f3e2e2] overflow-auto p-8">
      <h2 className="text-4xl font-bold mb-8 text-black">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-black text-lg">No items in cart.</p>
      ) : (
        <div className="w-full max-w-2xl flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item._id}
              className="bg-[#fcf6f6] text-black p-6 rounded-xl shadow-lg flex flex-col sm:flex-row sm:justify-between items-center gap-4"
            >
              <div className="flex flex-col gap-1 text-center sm:text-left">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-xl font-bold">₹{item.price}</p>
              </div>
              <button
                onClick={() => removeItem(item._id)}
                className="bg-[#FFCBA4] text-black font-semibold py-2 px-6 rounded hover:bg-[#ffb88a] transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
