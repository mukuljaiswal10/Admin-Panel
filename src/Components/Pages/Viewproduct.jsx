// ViewProductItems.jsx
import React from "react";
import { Link } from "react-router";

export default function ViewProductItems() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Breadcrumb */}
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
            <span>Products</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/addproduct"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Product
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Products</li>
        </ol>
      </nav>


      {/* Entire UI inside form */}
      <form className="max-w-7xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Main Panel */}
        <div className="border rounded-md bg-white shadow-sm">
          {/* Header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Product Items</h2>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm font-semibold text-gray-600 border-b">
            <div className="col-span-1">DELETE</div>
            <div className="col-span-1">S. NO.</div>
            <div className="col-span-2">PRODUCT NAME</div>
            <div className="col-span-2">DESCRIPTION</div>
            <div className="col-span-2">SHORT DESCRIPTION</div>
            <div className="col-span-2">THUMBNAILS</div>
            <div className="col-span-1">ACTION</div>
            <div className="col-span-1">STATUS</div>
          </div>

          {/* Row Component (repeat multiple rows) */}
          {[1, 2, 3, 4].map((num, index) => (
            <div
              key={index}
              className="grid grid-cols-12 px-4 py-4 text-gray-700 hover:bg-gray-100 transition border-b"
            >
              {/* Delete checkbox */}
              <div className="col-span-1 flex items-center">
                <input type="checkbox" />
              </div>

              {/* S. No */}
              <div className="col-span-1 flex items-center">{num}</div>

              {/* Product Name */}
              <div className="col-span-2 flex items-center font-semibold">
                Men's
              </div>

              {/* Description */}
              <div className="col-span-2 flex flex-col text-sm">
                <span className="truncate">Lorem ipsum dolor sit...</span>
                <a href="#" className="text-blue-600 hover:underline text-xs">
                  Read More
                </a>
              </div>

              {/* Short Description */}
              <div className="col-span-2 flex flex-col text-sm">
                <span className="truncate">Lorem ipsum dolor sit...</span>
                <a href="#" className="text-blue-600 hover:underline text-xs">
                  Read More
                </a>
              </div>

              {/* Thumbnail */}
              <div className="col-span-2 flex items-center">
                <img
                  src="https://via.placeholder.com/50"
                  alt="thumb"
                  className="h-12 w-12 rounded object-cover border"
                />
              </div>

              {/* Action icons */}
              <div className="col-span-1 flex items-center gap-3">
                {/* Delete icon */}
                <button
                  type="button"
                  className="text-red-600 hover:text-red-800 transition"
                  title="Delete"
                >
                  🗑
                </button>

                {/* Edit icon */}
                <button
                  type="button"
                  className="text-yellow-500 hover:text-yellow-600 transition"
                  title="Edit"
                >
                  ✏
                </button>
              </div>

              {/* Status */}
              <div className="col-span-1 flex items-center text-green-600 font-medium">
                Active
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}