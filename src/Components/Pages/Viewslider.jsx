// ViewSlider.jsx
import React from "react";
import { Link } from "react-router";

export default function ViewSlider() {
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
          <li>
            <Link
              to={"/addslider"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Slider
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Slider</li>
        </ol>
      </nav>

      {/* All UI inside form as requested */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Header + actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Slider</h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Change Status
            </button>

            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Dark panel table */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f1724]">
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-3 text-gray-300 text-sm border-b border-gray-700">
            <div className="col-span-1"><input type="checkbox" /></div>
            <div className="col-span-3 font-semibold">NAME</div>
            <div className="col-span-2 font-semibold">IMAGE</div>
            <div className="col-span-1 font-semibold">ORDER</div>
            <div className="col-span-2 font-semibold">STATUS</div>
            <div className="col-span-1 font-semibold">ACTION</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition">
            <div className="col-span-1 flex items-start pt-1">
              <input type="checkbox" />
            </div>

            <div className="col-span-3 flex items-center font-medium">
              Neil Sims
            </div>

            <div className="col-span-2 flex items-center">
              <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-semibold text-white mr-3">
                Img
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-center">1</div>

            <div className="col-span-2 flex items-center justify-center">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-md">
                Active
              </span>
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <button
                type="button"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                aria-label="Edit"
              >
                ✏
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 px-4 py-5 text-gray-200 hover:bg-[#0c1320] transition">
            <div className="col-span-1 flex items-start pt-1">
              <input type="checkbox" />
            </div>

            <div className="col-span-3 flex items-center font-medium">
              Neil Sims
            </div>

            <div className="col-span-2 flex items-center">
              <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-semibold text-white mr-3">
                Img
              </div>
            </div>

            <div className="col-span-1 flex items-center justify-center">1</div>

            <div className="col-span-2 flex items-center justify-center">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-md">
                Deactive
              </span>
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <button
                type="button"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                aria-label="Edit"
              >
                ✏
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}