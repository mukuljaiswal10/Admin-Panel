// AddColor.jsx
import React, { useState } from "react";
import { Link } from "react-router";

export default function AddColor() {
  const [color, setColor] = useState("#000000");
  const [hex, setHex] = useState("#000000");

  // keep color and hex in sync
  function handleColorChange(e) {
    setColor(e.target.value);
    setHex(e.target.value.toUpperCase());
  }

  function handleHexChange(e) {
    let v = e.target.value;
    if (!v.startsWith("#")) v = "#" + v;
    // allow user to type; only update color when valid hex length
    setHex(v.toUpperCase());
    if (/^#[0-9A-F]{6}$/i.test(v)) {
      setColor(v);
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
            <span>Colors</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Color</li>
        </ol>
      </nav>

      <div className="max-w-5xl mx-auto">
        <div className="border rounded-md bg-white shadow-sm">
          {/* Panel header */}
          <div className="bg-blue-50 border-b px-6 py-4 rounded-t-md">
            <h2 className="text-2xl font-semibold text-gray-800">Add Colors</h2>
          </div>

          <form
            className="p-6"
            onSubmit={(e) => {
              // demo: let browser show native validation; prevent reload for demo
              if (!e.currentTarget.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
                return;
              }
              e.preventDefault();
              // demo behavior: just log (remove when hooking backend)
              console.log("Submitting color:", { hex, color });
              alert(`Color ready to submit: ${hex}`);
            }}
          >
            {/* Color Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color Name
              </label>
              <input
                name="colorName"
                type="text"
                placeholder="Enter Color Name"
                required
                aria-required="true"
                className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition hover:shadow-sm"
              />
            </div>

            {/* Color picker area */}
            <div className="mb-6 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Color Picker</label>

                {/* Native color input */}
                <input
                  type="color"
                  value={color}
                  onChange={handleColorChange}
                  className="w-24 h-24 rounded-md border border-gray-300 p-0 cursor-pointer"
                  aria-label="Color picker"
                />
              </div>

              {/* hex input + preview */}
              <div className="col-span-8">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-2">HEX</label>
                    <input
                      name="hex"
                      type="text"
                      value={hex}
                      onChange={handleHexChange}
                      placeholder="#000000"
                      required
                      aria-required="true"
                      maxLength={7}
                      className="w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition hover:shadow-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">Type HEX (e.g. #FF00AA) — preview updates automatically.</p>
                  </div>

                  <div className="w-24">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preview</label>
                    <div
                      className="h-12 w-12 rounded shadow border"
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Order */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
              <input
                name="order"
                type="number"
                placeholder="Enter Order"
                min="1"
                required
                aria-required="true"
                className="w-48 rounded-md border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 transition hover:shadow-sm"
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-purple-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
              >
                Add Color
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}