// ViewTestimonial.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewTestimonial() {
  const [showSearch, setShowSearch] = useState(false);

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
          <li>
            <Link
              to={"/addtestimonial"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Testimonial
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Testimonial</li>
        </ol>
      </nav>

      {/* Entire UI inside form as requested */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Top search area (hidden/shown by filter button) */}
        <div className={`mb-4 transition-all ${showSearch ? "max-h-40" : "max-h-0 overflow-hidden"}`}>
          <div className="rounded-md border p-4 bg-white">
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="search"
                placeholder="Search Name"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button
                type="button"
                className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
                aria-label="Search"
              >
                🔍
              </button>
            </div>
          </div>
        </div>

        {/* Header + action buttons */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Testimonial</h2>

          <div className="flex items-center gap-3">
            {/* Filter button (left-side like screenshot) */}
            <button
              type="button"
              onClick={() => setShowSearch((s) => !s)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
              title="Toggle filter/search"
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

        {/* Dark table panel */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f1724]">
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-3 text-gray-300 text-sm border-b border-gray-700">
            <div className="col-span-1">
              <input type="checkbox" />
            </div>
            <div className="col-span-3 font-semibold">NAME</div>
            <div className="col-span-2 font-semibold">IMAGE</div>
            <div className="col-span-2 font-semibold">DESIGNATION</div>
            <div className="col-span-1 font-semibold">RATING</div>
            <div className="col-span-1 font-semibold">ORDER</div>
            <div className="col-span-1 font-semibold">STATUS</div>
            <div className="col-span-1 font-semibold">ACTION</div>
          </div>

          {/* Row component (repeat as needed) */}
          {[
            {
              name: "Neil Sims",
              imgAlt: "avatar",
              designation: "CEO Of SunPark",
              rating: 5,
              order: 1,
              active: true,
            },
            {
              name: "Neil Sims",
              imgAlt: "avatar",
              designation: "CEO Of SunPark",
              rating: 5,
              order: 1,
              active: false,
            },
          ].map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition"
            >
              <div className="col-span-1 flex items-start pt-1">
                <input type="checkbox" />
              </div>

              <div className="col-span-3 flex items-center">
                <span className="font-medium">{row.name}</span>
              </div>

              <div className="col-span-2 flex items-center">
                {/* small circular image placeholder */}
                <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-semibold text-white mr-3">
                  Img
                </div>
              </div>

              <div className="col-span-2 flex items-center">{row.designation}</div>

              <div className="col-span-1 flex items-center justify-center">{row.rating}</div>

              <div className="col-span-1 flex items-center justify-center">{row.order}</div>

              <div className="col-span-1 flex items-center justify-center">
                <span
                  className={`text-white text-xs px-3 py-1 rounded-md ${
                    row.active ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {row.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button
                  type="button"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                  aria-label={`Edit ${row.name}`}
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