// AddSlider.jsx
import React from "react";
import { Link } from "react-router";

export default function AddSlider() {
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
            <span>Slider</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Slider</li>
        </ol>
      </nav>


      <div className="max-w-6xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Slider</h2>
          </div>

          {/* Form (everything inside form) */}
          <form
            className="p-6"
            onSubmit={(e) => {
              // Let browser handle validation UI; prevent navigation for demo/testing.
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
              } else {
                e.preventDefault(); // remove when connecting backend
                // backend will handle real submit
              }
            }}
          >
            <div className="grid grid-cols-12 gap-6">
              {/* Left: Image drop area */}
              <div className="col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Image
                </label>

                <label
                  htmlFor="sliderImage"
                  className="group block h-64 w-full cursor-pointer rounded-md border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                >
                  <input
                    id="sliderImage"
                    name="image"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    required
                    aria-required="true"
                  />

                  <div className="text-center pointer-events-none">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-50">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h.5M12 7v6m0 0l3-3m-3 3L9 10" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">or click to upload</p>
                  </div>
                </label>

                <p className="mt-2 text-sm text-red-600 invisible">Image is required</p>
              </div>

              {/* Right: Title + Order */}
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {/* Title */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Title
                    </label>
                    <input
                      name="title"
                      type="text"
                      placeholder="Title"
                      required
                      aria-required="true"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition hover:shadow-sm"
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
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition hover:shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                Add Slider
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}