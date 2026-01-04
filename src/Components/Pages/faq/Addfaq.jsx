// AddFaq.jsx
import React from "react";
import { Link } from "react-router";

export default function AddFaq() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // API later
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
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
            <span>FAQs</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Faq</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        {/* Header strip */}
        <div className="px-6 py-4 border-b bg-gradient-to-r from-slate-200 to-slate-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add Faq</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Question */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Question
              </label>
              <input
                type="text"
                name="question"
                placeholder="Question"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Answer */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Answer
              </label>
              <textarea
                name="answer"
                placeholder="Answer"
                required
                rows={6}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
              />
            </div>

            {/* Order */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Order
              </label>
              <input
                type="number"
                name="order"
                placeholder="Order"
                required
                min="1"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="cursor-pointer select-none inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Add Faq
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
