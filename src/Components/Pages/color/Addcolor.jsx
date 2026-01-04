// // AddColor.jsx
import React, { useRef, useState } from "react";
import { Link, useParams } from "react-router";

export default function AddColor() {
  const pickerRef = useRef(null);
 
  let {id}=useParams()

  // Color Name input me hi hex store hoga
  const [colorName, setColorName] = useState("#000000");

  const isValidHex = (v) => /^#([0-9a-fA-F]{6})$/.test(v);

  // Picker -> input fill
  const handlePickerChange = (e) => {
    const hex = e.target.value; // always valid
    setColorName(hex);
  };

  // Input -> Picker update (agar valid hex hai)
  const handleNameChange = (e) => {
    let value = e.target.value.trim();

    // allow without #, normalize
    if (value && value[0] !== "#") value = `#${value}`;

    setColorName(value);

    if (isValidHex(value) && pickerRef.current) {
      pickerRef.current.value = value;
    }
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
            <span>Colors</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Colors</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b bg-gradient-to-r from-slate-100 to-slate-50">
          <h2 className="text-2xl font-semibold text-gray-800">Add Colors</h2>
        </div>

        <form className="p-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-5 max-w-5xl">
            {/* Color Name (hex code yahi fill hoga) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color Name
              </label>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="color_name"
                  placeholder="Enter Color Name (or HEX like #ff0000)"
                  required
                  value={colorName}
                  onChange={handleNameChange}
                  className="flex-1 rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                             focus:outline-none focus:ring-2 focus:ring-blue-300"
                />

                {/* Preview */}
                <div
                  className="h-10 w-10 rounded-md border border-gray-300 shadow-sm"
                  style={{
                    background: isValidHex(colorName) ? colorName : "#000000",
                  }}
                  title="Preview"
                />
              </div>

              {/* tiny hint only */}
              {colorName && !isValidHex(colorName) && (
                <p className="text-xs text-rose-600 mt-1">
                  HEX format like <span className="font-semibold">#A1B2C3</span>
                </p>
              )}
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Color Picker
              </label>
              <input
                ref={pickerRef}
                type="color"
                name="color_picker"
                value={isValidHex(colorName) ? colorName : "#000000"}
                onChange={handlePickerChange}
                className="cursor-pointer h-12 w-24 rounded-lg border border-gray-300 p-1 bg-white"
                title="Pick a color"
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
                placeholder="Enter Order"
                required
                min={1}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                           focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="cursor-pointer select-none rounded-lg px-5 py-3 font-semibold text-white
                           bg-gradient-to-r from-indigo-600 to-purple-600
                           hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl
                           active:scale-[0.98] transition duration-200
                           focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-offset-2"
              >
                Add Color
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

