// ViewCategory.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewCategory() {
  const [showFilter, setShowFilter] = useState(true); // top search visible by default

  const rows = [
    {
      name: "Neil Sims",
      img: "https://via.placeholder.com/28",
      order: 1,
      active: true,
    },
    {
      name: "Neil Sims",
      img: "https://via.placeholder.com/28",
      order: 1,
      active: false,
    },
  ];

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
            <span>Parent Category</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/addsubcategory"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Category
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Category</li>
        </ol>
      </nav>

      {/* Everything inside form */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Top Search area (visible) */}
        <div className={`mb-4 transition-all duration-300 ${showFilter ? "opacity-100" : "opacity-0 max-h-0 overflow-hidden"}`}>
          <div className="rounded-md border bg-white p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search Name"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="button" className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">🔍</button>
            </div>
          </div>
        </div>

        {/* Header + actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Category</h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowFilter((s) => !s)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
              title="Toggle filter"
            >
              ☰
            </button>

            <button type="button" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Change Status</button>

            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Delete</button>
          </div>
        </div>

        {/* Dark table panel */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f1724]">
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700">
            <div className="col-span-1"><input type="checkbox" /></div>
            <div className="col-span-4">NAME</div>
            <div className="col-span-2">IMAGE</div>
            <div className="col-span-1">ORDER</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-2">ACTION</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-4 py-6 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition"
            >
              <div className="col-span-1 flex items-start pt-1">
                <input type="checkbox" />
              </div>

              <div className="col-span-4 flex items-center font-medium">
                {r.name}
              </div>

              <div className="col-span-2 flex items-center">
                <img src={r.img} alt="thumb" className="h-8 w-8 rounded-full object-cover border mr-3" />
              </div>

              <div className="col-span-1 flex items-center justify-center">
                {r.order}
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <span className={`px-3 py-1 rounded-md text-white ${r.active ? "bg-green-600" : "bg-red-500"}`}>
                  {r.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-2 flex items-center justify-center gap-3">
                <button type="button" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition" aria-label="Edit">✏</button>
                <button type="button" className="text-yellow-400 hover:text-yellow-500 transition" aria-label="Other">▣</button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}