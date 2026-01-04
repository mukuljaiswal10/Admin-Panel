// AddWhyChooseUs.jsx
import React, { useMemo, useRef, useState } from "react";
import { Link } from "react-router";

export default function AddWhyChooseUs() {
  const inputRef = useRef(null);

  const [imgFile, setImgFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const previewUrl = useMemo(() => {
    if (!imgFile) return "";
    return URL.createObjectURL(imgFile);
  }, [imgFile]);

  const handlePick = () => inputRef.current?.click();

  const handleFile = (file) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;
    setImgFile(file);
  };

  const removeImage = () => {
    setImgFile(null);
    if (inputRef.current) inputRef.current.value = "";
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
            <span>Why Choose Us</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Why Choose Us</li>
        </ol>
      </nav>
      {/* end */}

      {/* Main Card */}
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="bg-slate-200/70 px-5 py-3 border-b border-gray-300">
          <h2 className="text-xl font-semibold text-gray-800">
            Add Why Choose Us
          </h2>
        </div>

        {/* Body */}
        <form
          className="p-5"
          onSubmit={(e) => e.preventDefault()}
          autoComplete="off"
        >
          <div className="grid grid-cols-12 gap-6">
            {/* Left: Image */}
            <div className="col-span-12 md:col-span-5">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Choose Image
              </label>

              <div
                className={`relative rounded-lg border-2 border-dashed bg-white overflow-hidden transition ${
                  dragActive
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-300"
                }`}
                onDragEnter={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(true);
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(true);
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(false);
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDragActive(false);
                  const file = e.dataTransfer.files?.[0];
                  handleFile(file);
                }}
              >
                {/* Hidden file input */}
                <input
                  ref={inputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  name="why_choose_image"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                  required={!imgFile}
                />

                {/* Preview / Placeholder */}
                {!imgFile ? (
                  <button
                    type="button"
                    onClick={handlePick}
                    className="cursor-pointer w-full h-[260px] flex flex-col items-center justify-center text-gray-500 hover:bg-gray-50 transition"
                    title="Click to upload"
                  >
                    <div className="text-4xl mb-2">☁</div>
                    <div className="text-lg">Drag and drop</div>
                  </button>
                ) : (
                  <div className="p-3">
                    <div className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
                      <img
                        src={previewUrl}
                        alt="preview"
                        className="w-full h-[210px] object-cover"
                      />
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handlePick}
                        className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                      >
                        Change
                      </button>

                      <button
                        type="button"
                        onClick={removeImage}
                        className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Fields */}
            <div className="col-span-12 md:col-span-7">
              {/* Title */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Order */}
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Order
                </label>
                <input
                  type="number"
                  name="order"
                  placeholder="Order"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Description */}
              <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  placeholder="Description"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="cursor-pointer select-none rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
