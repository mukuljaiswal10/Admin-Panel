// ViewWhyChooseUs.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewWhyChooseUs() {
  const [showSearch, setShowSearch] = useState(false);

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
            <span>Why Choose US</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/addwhychooseus"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Why Choose Us
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Why Choose Us</li>
        </ol>
      </nav>

      {/* All UI inside form */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        
        {/* Top Search Bar (toggle by filter button) */}
        <div className={`mb-4 transition-all duration-300 ${showSearch ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="bg-white border rounded-md p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search Name"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
              >
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* Header + Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Why Choose Us</h2>

          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
            >
              ☰
            </button>

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

        {/* Table Container */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f172a]">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700">
            <div className="col-span-1"></div>
            <div className="col-span-2">TITLE</div>
            <div className="col-span-2">IMAGE</div>
            <div className="col-span-3">DESCRIPTION</div>
            <div className="col-span-1">ORDER</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-1">ACTION</div>
          </div>

          {/* Example Row (duplicate if needed) */}
          {[
            { name: "Neil Sims", desc: "CEO Of SunPark", order: 1, active: true },
            { name: "Neil Sims", desc: "CEO Of SunPark", order: 1, active: false },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition"
            >
              <div className="col-span-1 flex items-center">
                <input type="checkbox" />
              </div>

              <div className="col-span-2 flex items-center font-medium">
                {row.name}
              </div>

              <div className="col-span-2 flex items-center">
                <div className="h-8 w-8 rounded-full bg-yellow-400 text-white flex items-center justify-center mr-3 text-xs font-semibold">
                  Img
                </div>
              </div>

              <div className="col-span-3 flex items-center">
                {row.desc}
              </div>

              <div className="col-span-1 flex items-center justify-center">
                {row.order}
              </div>

              <div className="col-span-2 flex items-center justify-center">
                <span className={`px-3 py-1 text-xs rounded-md text-white ${row.active ? "bg-green-600" : "bg-red-600"}`}>
                  {row.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button
                  type="button"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                >
                  ✏
                </button>
              </div>
            </div>
          ))}

        </div>
      </form>
    </div>
  );
}