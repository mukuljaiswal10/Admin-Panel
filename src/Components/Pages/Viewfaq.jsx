// ViewFaq.jsx
import React from "react";
import { Link } from "react-router";

export default function ViewFaq() {
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
            <span>FAQS</span>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              to={"/addfaq"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Faqs
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">View Faqs</li>
        </ol>
      </nav>

      <form className="max-w-6xl mx-auto">
        {/* Header with buttons */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">View Faqs</h2>

          <div className="flex gap-3">
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

        {/* Table/List UI */}
        <div className="overflow-hidden rounded-md shadow bg-[#111827]">
          {/* Header Row */}
          <div className="grid grid-cols-12 px-4 py-3 text-gray-300 text-sm border-b border-gray-700">
            <div className="col-span-1">
              <input type="checkbox" />
            </div>
            <div className="col-span-3 font-semibold">QUESTION</div>
            <div className="col-span-5 font-semibold">ANSWER</div>
            <div className="col-span-1 font-semibold">ORDER</div>
            <div className="col-span-1 font-semibold">STATUS</div>
            <div className="col-span-1 font-semibold">ACTION</div>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-12 px-4 py-4 text-gray-200 border-b border-gray-700 hover:bg-[#0f172a] transition">
            <div className="col-span-1 flex items-start pt-1">
              <input type="checkbox" />
            </div>

            <div className="col-span-3 font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </div>

            <div className="col-span-5 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae adipisci explicabo molestias possimus quidem obcaecati
              deserunt vel, officiis, nobis facilis earum quaerat aut esse
              consequuntur ab praesentium eius suscipit natus!
            </div>

            <div className="col-span-1 font-medium">1</div>

            <div className="col-span-1">
              <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-md">
                Active
              </span>
            </div>

            <div className="col-span-1">
              <button
                type="button"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                ✏
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-12 px-4 py-4 text-gray-200 hover:bg-[#0f172a] transition">
            <div className="col-span-1 flex items-start pt-1">
              <input type="checkbox" />
            </div>

            <div className="col-span-3 font-medium">Neil Sims</div>

            <div className="col-span-5 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae debitis hic, voluptate ullam optio laborum odit
              delectus, reiciendis esse vitae eos nostrum? Praesentium
              doloremque debitis, fuga quod quidem doloribus.
            </div>

            <div className="col-span-1 font-medium">1</div>

            <div className="col-span-1">
              <span className="bg-red-600 text-white text-xs px-3 py-1 rounded-md">
                Deactive
              </span>
            </div>

            <div className="col-span-1">
              <button
                type="button"
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
              >
                ✏
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
