// src/Components/Pages/Dashboard.jsx
import React from "react";
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white px-5 py-6">
      {/* BREADCRUMB (working Links) */}
      <div className=" mb-4 flex items-center gap-2">
          Home
        <span className="text-gray-400">/</span>
          Dashboard
      </div>

      {/* TOP 3 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* USERS CARD */}
        <div className="rounded-xl p-5 shadow-md text-white bg-gradient-to-r from-blue-900 to-blue-500">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold">26K</h3>
            <button className="text-2xl leading-none" aria-label="menu">
              ⋮
            </button>
          </div>
          <p className="mt-3 text-white/90">Users</p>
          <p className="text-sm mt-1 text-white/80">-12.4% ↓</p>
        </div>

        {/* PRODUCT CARD */}
        <div className="rounded-xl p-5 shadow-md text-white bg-gradient-to-r from-cyan-700 to-sky-500">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold">$6,200</h3>
            <button className="text-2xl leading-none" aria-label="menu">
              ⋮
            </button>
          </div>
          <p className="mt-3 text-white/90">Product</p>
          <p className="text-sm mt-1 text-white/80">40.9% ↑</p>
        </div>

        {/* CATEGORY CARD */}
        <div className="rounded-xl p-5 shadow-md text-white bg-gradient-to-r from-orange-500 to-pink-500">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold">2.49%</h3>
            <button className="text-2xl leading-none" aria-label="menu">
              ⋮
            </button>
          </div>
          <p className="mt-3 text-white/90">Category</p>
          <p className="text-sm mt-1 text-white/80">84.7% ↑</p>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        <div className="rounded-xl p-5 shadow-md text-white bg-gradient-to-r from-red-600 to-orange-500">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold">44K</h3>
            <button className="text-2xl leading-none" aria-label="menu">
              ⋮
            </button>
          </div>
          <p className="mt-3 text-white/90">Orders</p>
          <p className="text-sm mt-1 text-white/80">-23.6% ↓</p>
        </div>

        {/* Empty space spans remaining 2 columns on desktop like screenshot */}
        <div className="hidden md:block md:col-span-2" />
      </div>

      {/* Extra Space For Clean Look */}
      <div className="h-40" />
    </div>
  );
}
