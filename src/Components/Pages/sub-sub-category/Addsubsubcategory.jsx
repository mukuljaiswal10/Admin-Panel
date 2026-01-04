// AddSubSubCategory.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function AddSubSubCategory() {
  const fileRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!imageFile) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(imageFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [imageFile]);

  const handleFilePick = (file) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;
    setImageFile(file);
  };

  const onInputChange = (e) => handleFilePick(e.target.files?.[0]);
  const onDrop = (e) => {
    e.preventDefault();
    handleFilePick(e.dataTransfer.files?.[0]);
  };
  const onDragOver = (e) => e.preventDefault();

  const removeImage = () => {
    setImageFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const openFileDialog = () => fileRef.current?.click();

  const onSubmit = (e) => {
    e.preventDefault();
    // backend later
    // const fd = new FormData(e.target);
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
            <span>Sub Sub Categories</span>
          </li>

          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Sub Sub Category</li>
        </ol>
      </nav>
      {/* end */}

      {/* Main Card */}
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-gray-300 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">
            Add Sub Sub Category
          </h2>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Category Image */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Category Image
              </label>

              <div
                className="relative rounded-lg border border-gray-300 bg-white h-[240px] flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 hover:shadow-sm transition"
                onDrop={onDrop}
                onDragOver={onDragOver}
                role="button"
                tabIndex={0}
                onClick={openFileDialog}
                title="Click or Drag & Drop"
              >
                <input
                  ref={fileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={onInputChange}
                  name="category_image"
                  required
                />

                {!previewUrl ? (
                  <div className="text-center select-none">
                    <div className="text-5xl mb-2">☁️</div>
                    <p className="text-gray-500">Drag and drop</p>
                  </div>
                ) : (
                  <>
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="absolute inset-0 w-full h-full object-contain bg-white"
                    />

                    {/* Change/Delete buttons */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          openFileDialog();
                        }}
                        className="cursor-pointer select-none px-3 py-2 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md active:scale-[0.98] transition duration-200"
                        title="Change"
                      >
                        Change
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="cursor-pointer select-none px-3 py-2 text-sm font-semibold rounded-md text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-md active:scale-[0.98] transition duration-200"
                        title="Delete"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right: Fields */}
            <div className="space-y-4">
              {/* Parent Category Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Parent Category Name
                </label>
                <select
                  required
                  defaultValue=""
                  name="parent_category_id"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="1">Men&apos;s</option>
                  <option value="2">Women</option>
                  <option value="3">Sale</option>
                </select>
              </div>

              {/* Sub Category */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Sub Category Name
                </label>
                <select
                  required
                  defaultValue=""
                  name="sub_category_id"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  {/* Dummy options */}
                  <option value="11">Shoe</option>
                  <option value="12">T-Shirt</option>
                  <option value="13">Jeans</option>
                </select>
              </div>

              {/* Category Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Category Name
                </label>
                <input
                  required
                  type="text"
                  name="sub_sub_category_name"
                  placeholder="Category Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              {/* Order */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Order
                </label>
                <input
                  required
                  type="number"
                  name="sub_sub_category_order"
                  placeholder="Order"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="cursor-pointer select-none px-5 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 hover:shadow-lg active:scale-[0.98] transition duration-200"
            >
              Add Sub Sub Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
