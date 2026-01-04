// AddMaterial.jsx
import React from "react";
import { Link } from "react-router";

export default function AddMaterial() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
            <span>Material</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Material</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        {/* Header strip */}
        <div className="px-5 py-4 border-b bg-gradient-to-r from-slate-100 to-slate-50">
          <h2 className="text-2xl font-semibold text-gray-800">Add Material</h2>
        </div>

        {/* Form */}
        <form
          className="p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 gap-5 max-w-4xl">
            {/* Material Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Material Name
              </label>
              <input
                type="text"
                name="material_name"
                placeholder="Material Name"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Order */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Order
              </label>
              <input
                type="number"
                name="order"
                placeholder="Order"
                required
                min={1}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="cursor-pointer select-none rounded-lg px-5 py-3 font-semibold text-white
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl
                           active:scale-[0.98] transition duration-200
                           focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
              >
                Add Material
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
