// ViewUser.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function ViewUser() {
  const [showSearch, setShowSearch] = useState(false);
  const [rows, setRows] = useState([
    { id: 1, name: "Neil Sims", email: "xyz@gmail.com", mobile: "9876543210", active: true, selected: false },
    { id: 2, name: "Neil Sims", email: "xyz@gmail.com", mobile: "9876543210", active: false, selected: false },
  ]);

  const selectedCount = rows.filter(r => r.selected).length;

  function toggleSelectAll(e) {
    const checked = e.target.checked;
    setRows(prev => prev.map(r => ({ ...r, selected: checked })));
  }

  function toggleRowSelect(id) {
    setRows(prev => prev.map(r => (r.id === id ? { ...r, selected: !r.selected } : r)));
  }

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
            <span>Users</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Users</li>
        </ol>
      </nav>

      {/* <form className="max-w-6xl mx-auto" onSubmit={(e) => e.preventDefault()}> */}
    
        <div className={`transition-all duration-300 ${showSearch ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0 overflow-hidden mb-0"}`}>
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
          <h2 className="text-2xl font-semibold text-gray-800">View User</h2>

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
          <div className="grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700 items-center">
            <div className="col-span-1"><input type="checkbox" onChange={toggleSelectAll} checked={selectedCount === rows.length && rows.length > 0} /></div>
            <div className="col-span-4">NAME</div>
            <div className="col-span-3">EMAIL ID</div>
            <div className="col-span-2">MOBILE NUMBER</div>
            <div className="col-span-1">STATUS</div>
            <div className="col-span-1">ACTION</div>
          </div>

          {/* Rows */}
          {rows.map(r => (
            <div
              key={r.id}
              className="grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 hover:bg-[#0c1320] transition items-center"
            >
              <div className="col-span-1 flex items-start pt-1">
                <input type="checkbox" checked={r.selected} onChange={() => toggleRowSelect(r.id)} />
              </div>

              <div className="col-span-4">
                <div className="font-medium">{r.name}</div>
              </div>

              <div className="col-span-3 text-sm text-gray-200">{r.email}</div>

              <div className="col-span-2 text-sm text-gray-200">{r.mobile}</div>

              <div className="col-span-1 flex items-center justify-center">
                <span className={`px-3 py-1 text-xs rounded-md text-white ${r.active ? "bg-green-600" : "bg-red-500"}`}>
                  {r.active ? "Active" : "Deactive"}
                </span>
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button type="button" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition" aria-label="Edit">✏</button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer: selected count (optional) */}
        <div className="mt-4 text-sm text-gray-600">
          {selectedCount} selected
        </div>
        
      {/* </form> */}
    </div>
  );
}