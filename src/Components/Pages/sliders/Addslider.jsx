// src/pages/sliders/AddSlider.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function AddSlider() {
  const fileRef = useRef(null);

  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);

  const pickFile = () => fileRef.current?.click();

  const applyImage = (file) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;

    const url = URL.createObjectURL(file);

    if (imagePreview) URL.revokeObjectURL(imagePreview);

    setImageFile(file);
    setImagePreview(url);
  };

  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview("");
    if (fileRef.current) fileRef.current.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    applyImage(file);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // ✅ Backend API later (abhi sirf values ready rakh rahe)
    // Example: const fd = new FormData(e.target);  // name attribute se data mil jayega
    // console.log(Object.fromEntries(fd.entries()));

    console.log("Slider Submit =>", { title, order, imageFile });
  };

  return (
    <div className="p-6 bg-gray-50">
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
            <span>Sliders</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Slider</li>
        </ol>
      </nav>
      {/* end */}
      
      <form
        onSubmit={onSubmit}
        className="rounded-xl border border-gray-300 bg-white overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gray-200 border-b border-gray-300 px-5 py-3">
          <h2 className="text-2xl font-semibold text-gray-800">Add Slider</h2>
        </div>

        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Choose Image
              </label>

              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={onDrop}
                onClick={pickFile}
                className="relative h-[270px] rounded-md border-2 border-gray-300 bg-white cursor-pointer overflow-hidden"
                title="Click or Drag & Drop"
              >
                {imagePreview ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition flex items-end justify-between p-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          pickFile();
                        }}
                        className="cursor-pointer select-none rounded-md bg-white/90 px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-white transition"
                      >
                        Change
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="cursor-pointer select-none rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700 transition"
                      >
                        Remove
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center text-gray-500 gap-2">
                    <div className="text-4xl">☁️</div>
                    <div className="text-lg font-medium">Drag and drop</div>
                    <div className="text-xs text-gray-400">
                      (Click to upload)
                    </div>
                  </div>
                )}

                {/* Hidden Input */}
                <input
                  ref={fileRef}
                  type="file"
                  name="slider_image"
                  accept="image/*"
                  required
                  onChange={(e) => applyImage(e.target.files?.[0])}
                  className="hidden"
                />
              </div>
            </div>

            {/* Right Inputs */}
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Order
                </label>
                <input
                  type="number"
                  name="order"
                  placeholder="Order"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  required
                  min="1"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="cursor-pointer select-none rounded-md bg-blue-600 px-6 py-2.5 font-semibold text-white hover:bg-blue-700 hover:shadow-lg active:scale-[0.98] transition"
            >
              Add Slider
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
