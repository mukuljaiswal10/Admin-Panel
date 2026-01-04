// src/pages/sliders/ViewSlider.jsx
import React from "react";
import { Link } from "react-router";

export default function ViewSlider() {
  return (
    <div className="p-6 bg-gray-50">
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
            <span>Sliders</span>
          </li>
          <li className="text-gray-400">/</li>

          <li>
            <Link
              to={"/sliders/add"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Sliders
            </Link>
          </li>
          <li className="text-gray-400">/</li>

          <li className="text-black font-bold">View Sliders</li>
        </ol>
      </nav>
      {/* end */}

      {/* Wrapper */}
      <div className="rounded-xl border border-gray-300 bg-white overflow-hidden">
        {/* Header */}
        <div className="bg-gray-200 border-b border-gray-300 px-5 py-3 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">View Slider</h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="cursor-pointer select-none rounded-md bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700 hover:shadow-lg active:scale-[0.98] transition"
            >
              Change Status
            </button>

            <button
              type="button"
              className="cursor-pointer select-none rounded-md bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700 hover:shadow-lg active:scale-[0.98] transition"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="p-4">
          <div className="rounded-xl overflow-hidden bg-gradient-to-r from-[#0b0f1a] to-[#1b2756]">
            {/* Table Header */}
            <div className="grid grid-cols-12 items-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-gray-200/90 border-b border-white/10">
              <div className="col-span-1 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 rounded border-white/30 bg-transparent"
                />
              </div>
              <div className="col-span-4">Name</div>
              <div className="col-span-2 text-center">Image</div>
              <div className="col-span-1 text-center">Order</div>
              <div className="col-span-2 text-center">Status</div>
              <div className="col-span-2 text-center">Action</div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-12 items-center px-4 py-5 text-sm text-white/90 border-b border-white/10">
              <div className="col-span-1 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 rounded border-white/30 bg-transparent"
                />
              </div>

              <div className="col-span-4 font-medium">Neil Sims</div>

              <div className="col-span-2 flex justify-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-white/15 bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white/70">IMG</span>
                </div>
              </div>

              <div className="col-span-1 text-center">1</div>

              <div className="col-span-2 flex justify-center">
                <span className="rounded-lg bg-green-600 px-5 py-2 text-sm font-semibold text-white">
                  Active
                </span>
              </div>

              <div className="col-span-2 flex justify-center">
                <Link to={"/sliders/edit/1"}>
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

            {/* Row 2 */}
            <div className="grid grid-cols-12 items-center px-4 py-5 text-sm text-white/90">
              <div className="col-span-1 flex items-center justify-center">
                <input
                  type="checkbox"
                  className="cursor-pointer h-4 w-4 rounded border-white/30 bg-transparent"
                />
              </div>

              <div className="col-span-4 font-medium">Neil Sims</div>

              <div className="col-span-2 flex justify-center">
                <div className="h-10 w-10 rounded-full overflow-hidden border border-white/15 bg-white/10 flex items-center justify-center">
                  <span className="text-xs text-white/70">IMG</span>
                </div>
              </div>

              <div className="col-span-1 text-center">1</div>

              <div className="col-span-2 flex justify-center">
                <span className="rounded-lg bg-red-600 px-5 py-2 text-sm font-semibold text-white">
                  Deactive
                </span>
              </div>

              <div className="col-span-2 flex justify-center">
                <Link to={"/sliders/edit/2"}>
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
      </div>
    </div>
  );
}
