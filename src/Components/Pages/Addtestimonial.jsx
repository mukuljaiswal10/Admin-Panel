// AddTestimonial.jsx
import React from "react";
import { Link } from "react-router";

export default function AddTestimonial() {
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
            <span>Testimonial</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Testimonial</li>
        </ol>
      </nav>

      <div className="max-w-6xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Testimonial</h2>
          </div>

          {/* Form (wrap everything inside form as requested) */}
          <form
            className="p-6"
            onSubmit={(e) => {
              // Allow browser to show native validation; prevent actual page reload for demo.
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
              } else {
                e.preventDefault(); // remove this when you connect backend
                // backend will handle real submission
              }
            }}
          >
            <div className="grid grid-cols-12 gap-6">
              {/* Left: Image Drop area */}
              <div className="col-span-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Image
                </label>

                <label
                  htmlFor="image"
                  className="group flex h-64 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 transition"
                >
                  <input
                    id="image"
                    name="image"
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    required
                    aria-required="true"
                  />
                  <div className="text-center pointer-events-none">
                    <div className="mx-auto mb-2 h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16v-4a4 4 0 014-4h.5M12 7v6m0 0l3-3m-3 3L9 10"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-500">Drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">
                      or click to upload
                    </p>
                  </div>
                </label>

                <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
                  Image is required
                </p>
              </div>

              {/* Right: Fields */}
              <div className="col-span-7">
                <div className="grid grid-cols-1 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                      aria-required="true"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    />
                    <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
                      Name is required
                    </p>
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Designation
                    </label>
                    <input
                      name="designation"
                      type="text"
                      placeholder="Designation"
                      required
                      aria-required="true"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rating
                    </label>
                    <input
                      name="rating"
                      type="number"
                      placeholder="Rating"
                      min="1"
                      max="5"
                      required
                      aria-required="true"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
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
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows={4}
                      required
                      aria-required="true"
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
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
                Add Testimonial
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
