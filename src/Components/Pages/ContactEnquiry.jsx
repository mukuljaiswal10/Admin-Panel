// ViewEnquiry.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewEnquiry() {
  const [showSearch, setShowSearch] = useState(false);

  const rows = [
    {
      id: 1,
      name: "Neil Sims",
      email: "xyz@gmail.com",
      message: "9876543210",
      subject: "General Query",
      active: true,
    },
    {
      id: 2,
      name: "Neil Sims",
      email: "xyz@gmail.com",
      message: "9876543210",
      subject: "Product Info",
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
            <span>Enquirys</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Contact Enquiry Management</li>
        </ol>
      </nav>

      
      {/* <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}> */}
        {/* Search area (toggleable) */}
        <div className={`transition-all duration-300 ${showSearch ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden mb-0"}`}>
          <div className="rounded-md border bg-white p-4">
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Search User"
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button type="button" className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">🔍</button>
            </div>
          </div>
        </div>

        {/* Header + actions */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Contact Enquiry Management</h2>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowSearch(s => !s)}
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition"
              title="Toggle filter"
            >
              ☰
            </button>

            <button type="button" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Change Status</button>
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">Delete</button>
          </div>
        </div>

        {/* Dark table */}
        <div className="overflow-hidden rounded-md shadow bg-[#0f1724]">
          {/* Table header */}
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700">
            <div className="col-span-1"><input type="checkbox" /></div>
            <div className="col-span-4">USER INFO</div>
            <div className="col-span-2">SUBJECT</div>
            <div className="col-span-3">MESSAGE</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1">ACTION</div>
          </div>

          {/* Rows */}
          {rows.map((r) => (
            <div
              key={r.id}
              className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition"
            >
              <div className="col-span-1 flex items-start pt-1">
                <input type="checkbox" />
              </div>

              <div className="col-span-4 flex flex-col justify-center">
                <span className="font-medium">{r.name}</span>
                <span className="text-xs text-gray-300">{r.email}</span>
              </div>

              <div className="col-span-2 flex items-center">
                <span className="text-sm">{r.subject}</span>
              </div>

              <div className="col-span-3 flex items-center">
                <span className="text-sm">{r.message}</span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <span className={`px-3 py-1 text-xs rounded-md text-white ${r.active ? "bg-green-600" : "bg-red-600"}`}>
                  {r.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button type="button" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition" aria-label="Edit">✏</button>
              </div>
            </div>
          ))}
        </div>
      {/* </form> */}
    </div>
  );
}