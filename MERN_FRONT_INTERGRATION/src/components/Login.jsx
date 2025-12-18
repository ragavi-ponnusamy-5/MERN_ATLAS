import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) return alert("Please enter your email");
    localStorage.setItem("user", email);
    navigate("/");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fcf6f6] to-[#f3e2e2] overflow-auto">
      <div className="bg-[#fcf6f6] p-8 rounded-xl shadow-lg flex flex-col items-center gap-6 w-full max-w-md">
        <h2 className="text-3xl font-bold text-black">Login</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded border border-[#f3e2e2] focus:outline-none focus:ring-2 focus:ring-black text-black"
        />
        <button
          onClick={handleLogin}
          className="bg-[#FFCBA4] text-black font-semibold py-2 px-6 rounded hover:bg-[#ffb88a] transition w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
}
