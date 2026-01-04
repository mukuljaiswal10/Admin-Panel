// ViewSubCategory.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewSubCategory() {
  const [showSearch, setShowSearch] = useState(false);

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
            <span>Sub Categories</span>
          </li>

          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/category/sub-category/add"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Sub Category
            </Link>
          </li>

          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Sub Category</li>
        </ol>
      </nav>
      {/* end */}

      {/* Search Box (Toggle) */}
      <div
        className={`transition-all duration-300 ${
          showSearch
            ? "max-h-40 opacity-100 mb-4"
            : "max-h-0 opacity-0 overflow-hidden mb-0"
        }`}
      >
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search sub category..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              name="view-subcategory-search"
            />
            <button
              type="submit"
              className="cursor-pointer select-none rounded-lg px-3 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              title="Search (UI only)"
            >
              🔍
            </button>
          </form>
        </div>
      </div>

      {/* Header + actions */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          View Sub Category
        </h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowSearch((prev) => !prev)}
            className="cursor-pointer select-none rounded-lg px-3 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            title={showSearch ? "Close filter" : "Open filter"}
          >
            ☰
          </button>

          <button
            type="button"
            className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
          >
            Change Status
          </button>

          <button
            type="button"
            className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Dark table */}
      <div className="overflow-x-auto rounded-xl shadow bg-[#0f1724] border border-gray-800">
        {/* Table header */}
        <div className="min-w-[1100px] grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700 items-center">
          <div className="col-span-1">
            <input type="checkbox" className="cursor-pointer" />
          </div>

          <div className="col-span-3">PARENT CATEGORY NAME</div>
          <div className="col-span-3">SUB CATEGORY NAME</div>
          <div className="col-span-2 text-center">IMAGE</div>
          <div className="col-span-1">ORDER</div>
          <div className="col-span-1 text-center">STATUS</div>
          <div className="col-span-1 text-center">ACTION</div>
        </div>

        {/* Row */}
        <div className="group relative min-w-[1100px] grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 items-center hover:bg-[#0c1320] transition duration-200">
          <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-500/70 transition" />

          <div className="col-span-1 flex items-start pt-1">
            <input type="checkbox" className="cursor-pointer" />
          </div>

          <div className="col-span-3 font-medium">Shoe</div>
          <div className="col-span-3 text-gray-300">Men</div>

          <div className="col-span-2 flex justify-center">
            <img
              src="https://via.placeholder.com/44"
              alt="Sub Category"
              className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-600"
            />
          </div>

          <div className="col-span-1 text-sm">1</div>

          <div className="col-span-1 flex items-center justify-center">
            <span
              className="cursor-pointer select-none px-5 py-2 text-xs font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-200 hover:scale-[1.03] shadow-[0_0_10px_rgba(34,197,94,0.25)]"
              title="Active"
            >
              Active
            </span>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <Link to={"/category/sub-category/edit/1"}>
              <button
                type="button"
                className="cursor-pointer select-none w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] active:scale-[0.98] transition duration-200 flex items-center justify-center text-white"
                aria-label="Edit"
                title="Edit"
              >
                ✎
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
