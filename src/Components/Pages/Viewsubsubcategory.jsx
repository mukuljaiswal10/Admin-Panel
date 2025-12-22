// ViewSubSubCategory.jsx
// ViewSubSubCategory.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewSubSubCategory() {
  const [showFilter, setShowFilter] = useState(false);

  const rows = [
    {
      parent: "Men",
      sub: "Men",
      name: "Shoe",
      img: "https://via.placeholder.com/28",
      order: 1,
      active: true,
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
            <span>Sub Sub Category</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/addsubsubcategory"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Sub Sub Category
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Sub Sub Category</li>
        </ol>
      </nav>

      {/* Entire UI inside form */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        
        {/* Filter Section - Toggle by Button */}
        <div
          className={`
            overflow-hidden transition-all duration-300
            ${showFilter ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0 mb-0"}
          `}
        >
          <div className="rounded-md border bg-white p-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3">
                <select className="w-full rounded-md border px-3 py-2">
                  <option>Select Parent Category</option>
                </select>
              </div>

              <div className="col-span-3">
                <select className="w-full rounded-md border px-3 py-2">
                  <option>Select Sub Category</option>
                </select>
              </div>

              <div className="col-span-5">
                <input
                  type="text"
                  placeholder="Search name..."
                  className="w-full rounded-md border px-4 py-2"
                />
              </div>

              <div className="col-span-1">
                <button
                  type="button"
                  className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700"
                >
                  🔍
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Header + Actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Sub Category</h2>

          <div className="flex items-center gap-3">
            {/* FILTER BUTTON WITH LOGIC */}
            <button
              type="button"
              onClick={() => setShowFilter(!showFilter)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ☰
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">Change Status</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f1724]">
          {/* Header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700">
            <div className="col-span-1"></div>
            <div className="col-span-2">PARENT CATEGORY</div>
            <div className="col-span-2">SUB CATEGORY</div>
            <div className="col-span-2">CATEGORY NAME</div>
            <div className="col-span-2">IMAGE</div>
            <div className="col-span-1">ORDER</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1">ACTION</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition"
            >
              <div className="col-span-1 flex items-center">
                <input type="checkbox" />
              </div>

              <div className="col-span-2 flex items-center">{r.parent}</div>
              <div className="col-span-2 flex items-center">{r.sub}</div>
              <div className="col-span-2 flex items-center">{r.name}</div>

              <div className="col-span-2 flex items-center">
                <img src={r.img} className="h-8 w-8 rounded object-cover border" />
              </div>

              <div className="col-span-1 flex items-center justify-center">{r.order}</div>

              <div className="col-span-1 flex items-center justify-center">
                <span className={`px-3 py-1 text-xs rounded-md text-white ${r.active ? "bg-green-600" : "bg-red-600"}`}>
                  {r.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">✏</button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}