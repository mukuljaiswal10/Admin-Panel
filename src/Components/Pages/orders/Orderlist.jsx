// OrderList.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function OrderList() {
  const [openModal, setOpenModal] = useState(false);

  // body scroll lock (modal open pe background scroll band)
  useEffect(() => {
    if (openModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [openModal]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Breadcrumbs */}
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
            <span>Orders</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Orders List</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border border-gray-300 bg-white overflow-hidden">
        {/* Header strip */}
        <div className="bg-gray-200 border-b border-gray-300 px-5 py-3">
          <h2 className="text-2xl font-semibold text-gray-800">
            Order&apos;s List
          </h2>
        </div>

        {/* Top Actions */}
        <div className="px-5 pt-4">
          <button
            type="button"
            className="cursor-pointer select-none rounded-md px-6 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition"
            title="Delete selected"
          >
            Delete
          </button>
        </div>

        {/* Dark Table */}
        <div className="px-5 py-4">
          <div className="overflow-x-auto rounded-xl shadow bg-[#0f1724] border border-gray-800">
            {/* Table header */}
            <div className="min-w-[1100px] grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700 items-center">
              <div className="col-span-1">
                <input
                  type="checkbox"
                  name="select_all"
                  className="cursor-pointer"
                />
              </div>
              <div className="col-span-1">S. NO.</div>
              <div className="col-span-2">ORDER ID</div>
              <div className="col-span-2">NAME</div>
              <div className="col-span-1">QUANTITY</div>
              <div className="col-span-1">PRICE</div>
              <div className="col-span-2">DATE</div>
              <div className="col-span-1">STATUS</div>
              <div className="col-span-1 text-center">VIEW</div>
            </div>

            {/* Row 1 */}
            <div className="group relative min-w-[1100px] grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 items-center hover:bg-[#0c1320] transition">
              <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-500/70 transition" />

              <div className="col-span-1 flex items-start pt-1">
                <input
                  type="checkbox"
                  name="select_row_1"
                  className="cursor-pointer"
                />
              </div>

              <div className="col-span-1 text-sm">1</div>
              <div className="col-span-2 text-sm">Frank01</div>
              <div className="col-span-2 font-medium">Roshan Chaurasia</div>
              <div className="col-span-1 text-sm">2</div>
              <div className="col-span-1 text-sm">₹ 3500</div>
              <div className="col-span-2 text-sm">10/06/2024</div>

              <div
                className="col-span-1 text-sm text-gray-300 truncate"
                title="Processing..."
              >
                Processing...
              </div>

              <div className="col-span-1 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => setOpenModal(true)}
                  className="cursor-pointer select-none text-sm font-semibold text-blue-300 hover:text-blue-200 hover:underline active:scale-[0.98] transition"
                  title="View Order"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Modal ===== */}
      <div
        className={`fixed inset-0 z-50 transition duration-200 ${
          openModal
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!openModal}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition duration-200 ${
            openModal ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpenModal(false)}
        />

        {/* Modal Panel */}
        <div className="absolute inset-0 flex items-start justify-center p-4 sm:p-8">
          <div
            className={`w-full max-w-5xl rounded-lg bg-white shadow-2xl border border-gray-200 overflow-hidden transform transition duration-200 ${
              openModal
                ? "scale-100 translate-y-0"
                : "scale-[0.98] translate-y-2"
            }`}
            role="dialog"
            aria-modal="true"
            aria-label="Order Details"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                Product Image&apos;s &amp; Price
              </h3>

              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="cursor-pointer select-none w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 active:scale-[0.98] transition"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Left: Items list */}
                <div className="lg:col-span-2">
                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="flex gap-4 items-start">
                      <div className="w-28 h-28 rounded-md border overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          src="https://images.unsplash.com/photo-1520975958225-1f3b9c1f3a24?q=80&w=300&auto=format&fit=crop"
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-[#b03030]">
                          Men Navy Blue &amp; Off White Typography Printed Pure
                          Cotton T-shirt
                        </p>

                        <div className="mt-2 text-sm text-gray-700 space-y-1">
                          <p>
                            <span className="font-semibold text-gray-900">
                              Price :
                            </span>{" "}
                            ₹ 1500
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Quantity :
                            </span>{" "}
                            1
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Size :
                            </span>{" "}
                            XL
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Color :
                            </span>{" "}
                            Red
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex gap-4 items-start">
                      <div className="w-28 h-28 rounded-md border overflow-hidden bg-gray-50 flex items-center justify-center">
                        <img
                          src="https://images.unsplash.com/photo-1520975680910-1c3f19f1db3e?q=80&w=300&auto=format&fit=crop"
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <p className="font-semibold text-[#b03030]">
                          Men Navy Blue &amp; Off White Typography Printed Pure
                          Cotton T-shirt
                        </p>

                        <div className="mt-2 text-sm text-gray-700 space-y-1">
                          <p>
                            <span className="font-semibold text-gray-900">
                              Price :
                            </span>{" "}
                            ₹ 1500
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Quantity :
                            </span>{" "}
                            1
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Size :
                            </span>{" "}
                            XL
                          </p>
                          <p>
                            <span className="font-semibold text-gray-900">
                              Color :
                            </span>{" "}
                            Red
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Details + Summary */}
                <div className="lg:col-span-1">
                  <div className="rounded-lg border border-gray-200 p-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Product Details
                    </h4>
                    <p className="text-sm text-gray-700 leading-6">
                      Roshan Chaurasia, First Floor , Laxmi Tower, Bhaskar
                      Circle, Ratanada, PRAYAGRAJ, UTTAR PRADESH 211003 India
                    </p>

                    <div className="mt-5">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">
                        Order Summary
                      </h4>

                      <div className="text-sm text-gray-700 space-y-2">
                        <div className="flex justify-between gap-3">
                          <span className="font-semibold">
                            Item(s) Subtotal :
                          </span>
                          <span>₹ 3500</span>
                        </div>

                        <div className="flex justify-between gap-3">
                          <span className="font-semibold">
                            Cash / Pay on Delivery :
                          </span>
                          <span>₹ 0</span>
                        </div>

                        <div className="flex justify-between gap-3">
                          <span className="font-semibold">Shipping :</span>
                          <span>₹ 0</span>
                        </div>

                        <div className="flex justify-between gap-3 pt-2 border-t">
                          <span className="font-bold text-gray-900">
                            Grand Total :
                          </span>
                          <span className="font-bold text-gray-900">
                            ₹ 3500
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Optional button
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="mt-4 w-full cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gray-900 hover:bg-black hover:shadow-lg active:scale-[0.98] transition"
                  >
                    Close
                  </button> */}
                </div>
              </div>
            </div>

            {/* Modal Footer (optional) */}
            <div className="px-5 py-4 border-t border-gray-200 flex justify-end">
              <button
                type="button"
                onClick={() => setOpenModal(false)}
                className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
