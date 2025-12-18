import { Link, Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import BuyNow from "./components/BuyNow";
import Login from "./components/Login";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddProducts from "./components/AddProducts";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden" style={{width: '100vw', height: '100vh'}}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0" style={{width: '100vw', height: '100vh'}}>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/5 to-teal-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Premium Header */}
      <header className="relative z-10 w-screen backdrop-blur-md border-b border-gray-200/50 shadow-lg" style={{width: '100vw', backgroundColor: '#f3e2e2'}}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 lg:py-6">
            {/* Logo/Brand */}
            <Link 
              to="/" 
              className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <span className="text-white font-black text-xl">🛋️</span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl font-black" style={{color: '#985087'}}>
                  RAGERA
                </h1>
                <p className="text-xs text-gray-600 font-medium">Premium Shopping Experience</p>
              </div>
            </Link>

            {/* Center Navigation Menu */}
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-black font-semibold text-lg hover:text-gray-700 transition-colors duration-300" style={{color: 'black'}}>
                Home
              </Link>
              <Link to="#" className="text-black font-semibold text-lg hover:text-gray-700 transition-colors duration-300" style={{color: 'black'}}>
                Blog
              </Link>
              <Link to="#" className="text-black font-semibold text-lg hover:text-gray-700 transition-colors duration-300" style={{color: 'black'}}>
                Categories
              </Link>
              <Link to="#" className="text-black font-semibold text-lg hover:text-gray-700 transition-colors duration-300" style={{color: 'black'}}>
                Contact
              </Link>
            </nav>

            {/* Right Side - Icons and Logout */}
            <div className="flex items-center space-x-6">

              {/* Cart Icon */}
              <Link to="/cart" className="relative text-black hover:text-gray-600 transition-colors duration-300" style={{color: 'black'}}>
                <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </Link>

              {/* Person Icon */}
              <Link to="/login" className="text-black hover:text-gray-600 transition-colors duration-300" style={{color: 'black'}}>
                <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>

              {/* Logout Button */}
              {localStorage.getItem("user") && (
                <button
                  onClick={logout}
                  className="bg-black text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  Logout
                </button>
              )}

              {/* Add Product Icon (Admin) */}
              <Link to="/addproduct" className="text-black hover:text-gray-600 transition-colors duration-300" style={{color: 'black'}} title="Add Product">
                <svg className="w-7 h-7" fill="none" stroke="black" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-screen h-full overflow-auto" style={{width: '100vw', height: 'calc(100vh - 80px)'}}>
        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<Product />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart cart={cart} setCart={setCart} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/buynow/:id"
            element={
              <ProtectedRoute>
                <BuyNow />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/addproduct" element={<AddProducts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
