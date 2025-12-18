import React, { useState } from "react";
import { API } from "../utils/api";

export default function AddProducts() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/postproduct`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
          price,
          image,
        }),
      });
      if (res.ok) {
        alert("Product Added Successfully!");
        setName("");
        setDescription("");
        setPrice(0);
        setImage("");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fcf6f6] to-[#f3e2e2] overflow-auto">
      <h2 className="text-4xl font-bold mb-8 text-black">Add New Product</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-md bg-[#fcf6f6] p-8 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-4 py-2 rounded border border-[#f3e2e2] focus:outline-none focus:ring-2 focus:ring-black text-black"
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="px-4 py-2 rounded border border-[#f3e2e2] focus:outline-none focus:ring-2 focus:ring-black text-black"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="px-4 py-2 rounded border border-[#f3e2e2] focus:outline-none focus:ring-2 focus:ring-black text-black"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="px-4 py-2 rounded border border-[#f3e2e2] focus:outline-none focus:ring-2 focus:ring-black text-black"
          required
        />
        <button
          type="submit"
          className="bg-black text-[#fcf6f6] py-2 px-4 rounded hover:bg-gray-800 font-semibold transition"
        >
          Add Product0
        </button>
      </form>
    </div>
  );
}
