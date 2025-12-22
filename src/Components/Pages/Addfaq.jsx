// Addfaq.jsx
import React from "react";
import { Link } from "react-router";

export default function Addfaq() {
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
          <li className="text-black font-bold">Add Faqs</li>
        </ol>
      </nav>

      {/* Panel */}
      <div className="max-w-5xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Faq</h2>
          </div>

          {/* Form area */}
          <form
            className="p-6"
            // no JS logic for validation; relying on HTML5 required attributes
            onSubmit={(e) => {
              // Let browser handle validation; prevent navigation for demo purposes
              // Remove preventDefault if you want a real submit to happen
              if (!e.currentTarget.checkValidity()) {
                // If invalid, allow browser to show native validation UI
                e.preventDefault();
                e.stopPropagation();
              } else {
                // For demo: prevent actual navigation/submit
                e.preventDefault();
                // You can optionally show a temporary success message here if you want.
                // Mentor/backend will handle real submit.
              }
            }}
          >
            {/* Question */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>

              <input
                name="question"
                type="text"
                placeholder="Question"
                required
                aria-required="true"
                className="peer w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />

              {/* Validation message shown only when field invalid AFTER attempted submit (native browser) */}
              <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
                Question is required
              </p>
            </div>

            {/* Answer */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer
              </label>

              <textarea
                name="answer"
                placeholder="Answer"
                required
                aria-required="true"
                rows={6}
                className="peer w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent resize-none"
              />

              <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
                Answer is required
              </p>
            </div>

            {/* Order */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Order
              </label>

              <input
                name="order"
                type="number"
                placeholder="Order"
                required
                aria-required="true"
                min="1"
                className="peer w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />

              <p className="mt-2 text-sm text-red-600 invisible peer-invalid:visible">
                Order is required
              </p>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
              >
                Add Faq
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
