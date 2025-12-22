// AddProduct.jsx
import React, { useRef } from "react";
import { Link } from "react-router";

export default function AddProduct() {
  const descRef = useRef(null);
  const imageRef = useRef(null);
  const backImageRef = useRef(null);
  const galleryRef = useRef(null);

  // small helper to apply formatting to the contentEditable using execCommand
  // execCommand is deprecated but fine for admin UI mockups and works in many browsers.
  function applyFormat(command, value = null) {
    // focus editable first so the command applies
    descRef.current && descRef.current.focus();
    if (command === "createLink") {
      const url = prompt("Enter URL (include https://):", "https://");
      if (!url) return;
      document.execCommand("createLink", false, url);
    } else {
      document.execCommand(command, false, value);
    }
  }

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
            <span>Products</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Products</li>
        </ol>
      </nav>

      <div className="max-w-7xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Product</h2>
          </div>

          {/* All UI inside form */}
          <form
            className="p-6"
            onSubmit={(e) => {
              // Native validation will block submit if required fields are empty.
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                return;
              }
              // remove preventDefault when integrating backend
              e.preventDefault();
              // demo: you can read values here or let backend handle it
              alert("Form ready to submit (demo prevented).");
            }}
          >
            <div className="grid grid-cols-12 gap-6">
              {/* Left column: images */}
              <div className="col-span-4 space-y-6">
                {/* Product Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image
                  </label>
                  <label
                    htmlFor="productImage"
                    className="group block h-40 w-full cursor-pointer rounded-md border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                  >
                    <input
                      id="productImage"
                      ref={imageRef}
                      name="productImage"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                      required
                      aria-required="true"
                    />
                    <div className="text-center pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h.5M12 7v6m0 0l3-3m-3 3L9 10" />
                      </svg>
                      <p className="text-sm">Drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">or click to upload</p>
                    </div>
                  </label>
                </div>

                {/* Back Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Back Image</label>
                  <label
                    htmlFor="backImage"
                    className="group block h-40 w-full cursor-pointer rounded-md border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                  >
                    <input
                      id="backImage"
                      ref={backImageRef}
                      name="backImage"
                      type="file"
                      accept="image/*"
                      className="sr-only"
                    />
                    <div className="text-center pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h.5M12 7v6m0 0l3-3m-3 3L9 10" />
                      </svg>
                      <p className="text-sm">Drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">or click to upload</p>
                    </div>
                  </label>
                </div>

                {/* Gallery Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gallery Image</label>
                  <label
                    htmlFor="galleryImage"
                    className="group block h-40 w-full cursor-pointer rounded-md border-2 border-dashed border-gray-300 bg-white hover:bg-gray-50 transition flex items-center justify-center"
                  >
                    <input
                      id="galleryImage"
                      ref={galleryRef}
                      name="galleryImage"
                      type="file"
                      accept="image/*"
                      multiple
                      className="sr-only"
                    />
                    <div className="text-center pointer-events-none text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-2 h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16v-4a4 4 0 014-4h.5M12 7v6m0 0l3-3m-3 3L9 10" />
                      </svg>
                      <p className="text-sm">Drag and drop</p>
                      <p className="text-xs text-gray-400 mt-1">or click to upload</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Middle and right columns: inputs */}
              <div className="col-span-8 grid grid-cols-3 gap-4">
                {/* Row 1: Product Name */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
                  <input
                    name="productName"
                    type="text"
                    placeholder="Product Name"
                    required
                    aria-required="true"
                    className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Parent Category</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                {/* Row 2 */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Sub Category</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Select Category</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Sub Sub Category</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Material</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                {/* Row 3 */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Color</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Product Type</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Is Best Selling</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                {/* Row 4 */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Is Top Rated</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Is Upsell</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    <option>Nothing Selected</option>
                  </select>
                </div>

                <div className="col-span-1"></div>

                {/* Row 5: Prices / Stocks / Order */}
                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Actual Price</label>
                  <input name="actualPrice" type="text" placeholder="Actual Price" className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sale Price</label>
                  <input name="salePrice" type="text" placeholder="Sale Price" className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Total In Stocks</label>
                  <input name="stocks" type="number" placeholder="Total In Stocks" className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>

                <div className="col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                  <input name="order" type="number" placeholder="Order" className="w-full rounded-md border border-gray-300 px-4 py-3" />
                </div>
              </div>
            </div>

            {/* Description label + toolbar */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>

              {/* Toolbar: bold, italic, underline, align left/center/right, link */}
              <div className="flex items-center gap-2 mb-2">
                <button type="button" onClick={() => applyFormat("bold")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">B</button>
                <button type="button" onClick={() => applyFormat("italic")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">I</button>
                <button type="button" onClick={() => applyFormat("underline")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">U</button>

                <div className="border-l h-6"></div>

                <button type="button" onClick={() => applyFormat("justifyLeft")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">L</button>
                <button type="button" onClick={() => applyFormat("justifyCenter")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">C</button>
                <button type="button" onClick={() => applyFormat("justifyRight")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">R</button>

                <div className="border-l h-6"></div>

                <button type="button" onClick={() => applyFormat("createLink")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Link</button>
                <button type="button" onClick={() => applyFormat("unlink")} className="px-3 py-1 rounded border bg-white hover:bg-gray-100">Unlink</button>
              </div>

              {/* contentEditable description area */}
              <div
                ref={descRef}
                contentEditable
                suppressContentEditableWarning
                className="min-h-[160px] rounded-md border border-gray-300 px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Product description (rich text)"
                role="textbox"
              />
            </div>

            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}