// src/pages/material/AddMaterial.jsx
import React from "react";
import { Link } from "react-router";

export default function AddMaterial() {
  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ default submit stop
    // ✅ backend later
  };

  return (
    <div className="p-6 bg-gray-50">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li>
            <Link
              to={"/dashboard"}
              className="text-[blue] font-bold hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span>Country</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Country</li>
        </ol>
      </nav>
      {/* end */}
      
      <div className="rounded-xl border border-gray-300 bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-gray-200 border-b border-gray-300 px-5 py-3">
          <h2 className="text-2xl font-semibold text-gray-800">Add Country</h2>
        </div>

        {/* Form */}
        <div className="p-5">
          <form onSubmit={handleSubmit} noValidate={false}>
            {/* Material Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Name <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                name="materialName" // ✅ backend key
                placeholder="Material Name"
                required // ✅ default validation
                minLength={2}
                maxLength={50}
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Order */}
            <div className="mb-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Order <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                name="order" // ✅ backend key
                placeholder="Order"
                required // ✅ default validation
                inputMode="numeric"
                pattern="^[0-9]{1,5}$" // ✅ only digits (1-99999)
                title="Please enter a valid order number (only digits)."
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="cursor-pointer select-none rounded-md bg-[#5b46d6] px-6 py-2.5 font-semibold text-white
                         hover:bg-[#4b36c9] hover:shadow-lg active:scale-[0.98] transition"
            >
              Add Country
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
