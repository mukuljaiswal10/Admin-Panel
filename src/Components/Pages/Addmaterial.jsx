// AddMaterial.jsx
import React from "react";
import { Link } from "react-router";

export default function AddMaterial() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex items-center space-x-2">
          <li>
            <Link
              to={"/dashboard"}
              className="text-black font-bold hover:underline"
            >
              Home
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <span>Materials</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Material</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Material</h2>
          </div>

          {/* Everything inside form */}
          <form
            className="p-6"
            onSubmit={(e) => {
              // Let browser handle native validation; prevent reload for demo.
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                return;
              }
              e.preventDefault(); // remove when hooking backend
              // demo: you can read form data here or show a toast
              alert("All fields valid — ready to submit (demo prevented).");
            }}
          >
            <div className="grid grid-cols-1 gap-6">
              {/* Material Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Material Name
                </label>
                <input
                  name="materialName"
                  type="text"
                  placeholder="Material Name"
                  required
                  aria-required="true"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition hover:shadow-sm"
                />
              </div>

              {/* Order */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order
                </label>
                <input
                  name="order"
                  type="number"
                  placeholder="Order"
                  min="1"
                  required
                  aria-required="true"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition hover:shadow-sm"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                Add Material
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}