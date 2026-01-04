// AddCategory.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";

export default function AddCategory() {
  const [imgFile, setImgFile] = useState(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const fileRef = useRef(null);

  const previewUrl = useMemo(() => {
    if (!imgFile) return "";
    return URL.createObjectURL(imgFile);
  }, [imgFile]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const pickFile = () => fileRef.current?.click();

  const onFileChange = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setImgFile(f);
    e.target.value = "";
  };

  const deleteImage = () => {
    setImgFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragActive(false);

    const f = e.dataTransfer.files?.[0];
    if (!f) return;
    setImgFile(f);
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
            <span>Category</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Category</li>
        </ol>
      </nav>

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        {/* Header strip */}
        <div className="px-5 py-4 border-b bg-gradient-to-r from-slate-100 to-slate-50">
          <h2 className="text-2xl font-semibold text-gray-800">Add Category</h2>
        </div>

        {/* Body */}
        <form className="p-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left: Image box */}
            <div className="md:col-span-4">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Category Image
              </label>

              <div
                onClick={pickFile}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragActive(true);
                }}
                onDragLeave={() => setIsDragActive(false)}
                onDrop={handleDrop}
                className={[
                  "relative w-full h-[240px] rounded-xl border-2 border-dashed overflow-hidden",
                  "bg-white cursor-pointer select-none transition",
                  isDragActive
                    ? "border-blue-500 ring-2 ring-blue-200"
                    : "border-gray-300 hover:border-blue-400",
                ].join(" ")}
                title="Click to choose image / Drag & drop"
              >
                {/* Preview */}
                {imgFile ? (
                  <>
                    <img
                      src={previewUrl}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />

                    {/* Top-right actions */}
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          pickFile();
                        }}
                        className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition"
                        title="Change image"
                      >
                        Change
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteImage();
                        }}
                        className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98] transition"
                        title="Delete image"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center text-gray-400">
                    <div className="text-5xl leading-none">☁</div>
                    <div className="mt-3 text-lg font-medium">
                      Drag and drop
                    </div>
                    <div className="mt-1 text-xs text-gray-500">
                      Click to choose image
                    </div>
                  </div>
                )}

                {/* Hidden file input */}
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  onChange={onFileChange}
                  className="hidden"
                  name="category_image"
                />
              </div>
            </div>

            {/* Right: Inputs */}
            <div className="md:col-span-8">
              <div className="grid grid-cols-1 gap-5">
                {/* Category Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="category_name"
                    placeholder="Category Name"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-white text-gray-900 placeholder-gray-400
                               focus:outline-none focus:ring-2 focus:ring-blue-300"
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
                    Add Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
