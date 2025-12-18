import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../utils/api";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API}/api/getproduct`)
      .then((res) => res.json())
      .then((allProducts) => {
        const prod = allProducts.find((p) => p._id === id);
        setProduct(prod);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#fcf6f6] to-[#f3e2e2]">
        <p className="text-black text-xl">Product not found</p>
      </div>
    );

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-b from-[#fcf6f6] to-[#f3e2e2] overflow-auto p-8">
      <div className="bg-[#fcf6f6] p-8 rounded-xl shadow-lg max-w-md w-full flex flex-col items-center gap-6 text-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md"
        />
        <h3 className="text-2xl font-semibold">{product.name}</h3>
        <p className="text-lg">{product.description}</p>
        <p className="text-xl font-bold">₹{product.price}</p>

        <Link to={`/buynow/${product._id}`} className="w-full">
          <button className="bg-[#ffc1b6] text-black font-semibold py-2 px-6 rounded hover:bg-[#ff9f95] transition w-full">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
}
