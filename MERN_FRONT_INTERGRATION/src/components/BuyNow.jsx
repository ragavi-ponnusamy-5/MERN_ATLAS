import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <div className="text-center z-10">
          <div className="text-6xl mb-4 animate-bounce">🔍</div>
          <p className="text-2xl font-bold text-gray-900 mb-2">Product not found</p>
          <p className="text-gray-600">The product you're looking for doesn't exist</p>
        </div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-white/50 transform hover:scale-105 transition-all duration-500">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 p-6 text-center">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h2 className="text-3xl font-black text-white mb-2">Order Confirmed!</h2>
            <p className="text-emerald-100 font-medium">Thank you for your purchase</p>
          </div>

          {/* Product Details */}
          <div className="p-8">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-2xl mb-6 group">
              <img
                src={product.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop'}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Product Info */}
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
              
              {/* Price with styling */}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-3xl font-black text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                )}
              </div>

              {/* Success Message */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4 my-6">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-2xl">✅</span>
                  <p className="text-green-800 font-bold text-lg">Order Successfully Placed!</p>
                </div>
                <p className="text-green-700 text-sm mt-2">You will receive a confirmation email shortly</p>
              </div>

              {/* Order Details */}
              <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Order ID:</span>
                  <span className="font-bold text-gray-900">#ORD{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Estimated Delivery:</span>
                  <span className="font-bold text-gray-900">3-5 Business Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-6 bg-gray-50/50 space-y-3">
            <Link
              to="/"
              className="w-full block text-center bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
            >
              🛍️ Continue Shopping
            </Link>
            <button className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-gray-300 hover:border-gray-400 transform hover:scale-105">
              📧 Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
