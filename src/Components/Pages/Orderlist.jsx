// OrderList.jsx
import React from "react";
import { Link } from "react-router";

export default function OrderList() {
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
            <span>Order</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Order List</li>
        </ol>
      </nav>

      {/* UI inside Form */}
      <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}>
        {/* Panel */}
        <div className="border rounded-md bg-white shadow-sm">
          {/* Header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Order's List
            </h2>

            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Delete
            </button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm font-semibold text-gray-600 border-b">
            <div className="col-span-1"></div>
            <div className="col-span-1">S. No.</div>
            <div className="col-span-2">ORDER ID</div>
            <div className="col-span-2">NAME</div>
            <div className="col-span-1">QUANTITY</div>
            <div className="col-span-1">PRICE</div>
            <div className="col-span-2">DATE</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1 text-center">VIEW</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-12 px-4 py-4 text-gray-700 hover:bg-gray-100 transition border-b">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" />
            </div>

            <div className="col-span-1 flex items-center">1</div>

            <div className="col-span-2 flex items-center text-blue-600 hover:underline cursor-pointer">
              Frank01
            </div>

            <div className="col-span-2 flex items-center">Roshan Chaurasia</div>

            <div className="col-span-1 flex items-center">2</div>

            <div className="col-span-1 flex items-center">₹ 3500</div>

            <div className="col-span-2 flex items-center">10/06/2024</div>

            <div className="col-span-1 flex items-center text-gray-500">
              Processing...
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300 transition"
              >
                View
              </button>
            </div>
          </div>

          {/* Extra rows (UI only) – duplicate if needed */}
          <div className="grid grid-cols-12 px-4 py-4 text-gray-700 hover:bg-gray-100 transition">
            <div className="col-span-1 flex items-center">
              <input type="checkbox" />
            </div>

            <div className="col-span-1 flex items-center">2</div>

            <div className="col-span-2 flex items-center text-blue-600 hover:underline cursor-pointer">
              Frank02
            </div>

            <div className="col-span-2 flex items-center">Rahul Verma</div>

            <div className="col-span-1 flex items-center">1</div>

            <div className="col-span-1 flex items-center">₹ 1500</div>

            <div className="col-span-2 flex items-center">11/06/2024</div>

            <div className="col-span-1 flex items-center text-green-600">
              Completed
            </div>

            <div className="col-span-1 flex items-center justify-center">
              <button
                type="button"
                className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
