// AddCountry.jsx
import React from "react";
import { Link } from "react-router";

export default function AddCountry() {
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
            <span>Country</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Country</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add Country
            </h2>
          </div>

          {/* Form container (everything inside the form as requested) */}
          <form
            className="p-6"
            onSubmit={(e) => {
              // Let browser do validation. Prevent reload for demo/testing.
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
              } else {
                e.preventDefault(); // remove when integrating backend
                // backend will handle real submit
              }
            }}
          >
            {/* Category Name */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category Name
              </label>

              <input
                name="countryName"
                type="text"
                placeholder="Country Name"
                required
                aria-required="true"
                className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition hover:shadow-sm"
              />

              <p className="mt-2 text-sm text-red-600 invisible">
                {" "}
                {/* keeps layout tidy; browser shows native message */}
                Country name is required
              </p>
            </div>

            {/* Order */}
            <div className="mb-6">
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
                className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition hover:shadow-sm"
              />

              <p className="mt-2 text-sm text-red-600 invisible">
                Order is required
              </p>
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                Add Country
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
