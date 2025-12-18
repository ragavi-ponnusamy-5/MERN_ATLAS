import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../utils/api";

export default function Products({ setCart, cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/getproduct`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;
    const res = await fetch(`${API}/api/deleteproduct/${id}`, { method: "DELETE" });
    if (res.status === 204) {
      alert("Product deleted successfully");
      setProducts(products.filter(p => p._id !== id));
    } else {
      alert("Error deleting product");
    }
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Luxury Header Section */}
      <div className="relative backdrop-blur-sm border-b border-gray-200/50" style={{backgroundColor: '#fcf6f6'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content - Left Side */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 text-sm font-medium mb-6">
                ✨ New Collection Available
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 mb-6 tracking-tight">
                Luxury Collection
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl lg:max-w-none leading-relaxed font-medium">
                Discover our exclusive selection of premium products, crafted for those who appreciate excellence
              </p>
            </div>
            
            {/* Furniture Image - Right Side */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=center"
                alt="Premium Furniture Collection"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((p, index) => (
            <div
              key={p._id}
              className="group relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out overflow-hidden border border-white/50 hover:border-purple-200/50 transform hover:-translate-y-3 hover:rotate-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Premium Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-3xl">
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={p.image || 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=500&fit=crop'}
                    alt={p.name}
                    className="w-full h-72 object-cover object-center group-hover:scale-125 transition-transform duration-1000 ease-out filter group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Floating Discount Badge */}
                {p.discount && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 text-white text-sm font-bold px-4 py-2 rounded-2xl shadow-xl animate-bounce">
                    🔥 {p.discount}% OFF
                  </div>
                )}
                
                {/* Wishlist Heart */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-50 cursor-pointer">
                  <span className="text-red-500 text-lg">♥</span>
                </div>
                
                {/* Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>

              {/* Product Information */}
              <div className="relative p-6 bg-gradient-to-b from-white to-gray-50/50">
                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-900 transition-colors duration-300">
                  {p.name}
                </h3>
                
                {/* Rating Stars */}
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    <span>★★★★★</span>
                  </div>
                  <span className="text-sm text-gray-600 ml-2">(4.8)</span>
                </div>
                
                {/* Short Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                  {p.description || "Exceptional quality meets innovative design in this premium product crafted for discerning customers."}
                </p>

                {/* Price Section */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-black text-gray-900">₹{p.price}</span>
                    {p.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">₹{p.originalPrice}</span>
                    )}
                  </div>
                  {p.originalPrice && (
                    <div className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                      Save ₹{p.originalPrice - p.price}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {/* Primary Add to Cart Button */}
                  <button
                    onClick={() => addToCart(p)}
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300 relative overflow-hidden group/btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                      Add to Cart
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  
                  {/* Secondary Actions */}
                  <div className="flex space-x-3">
                    <Link
                      to={`/product/${p._id}`}
                      className="flex-1 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-center border border-gray-300 hover:border-gray-400 transform hover:scale-105"
                    >
                      🔍 View
                    </Link>
                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="flex-1 bg-gradient-to-r from-red-50 to-pink-50 hover:from-red-100 hover:to-pink-100 text-red-600 hover:text-red-700 font-semibold py-3 px-4 rounded-xl transition-all duration-300 border border-red-200 hover:border-red-300 transform hover:scale-105"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Empty State */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-bounce">🛍️</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No products available</h3>
            <p className="text-gray-600 text-lg">Our amazing collection is coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
