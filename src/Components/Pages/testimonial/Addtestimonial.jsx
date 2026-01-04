// AddTestimonial.jsx
import React, { useRef, useState } from "react";
import { Link } from "react-router";

export default function AddTestimonial() {
  const fileRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [hasImage, setHasImage] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // old preview cleanup
    if (imagePreview) URL.revokeObjectURL(imagePreview);

    const url = URL.createObjectURL(file);
    setImagePreview(url);
    setHasImage(true);
  };

  const handleRemoveImage = () => {
    // preview cleanup
    if (imagePreview) URL.revokeObjectURL(imagePreview);

    setImagePreview(null);
    setHasImage(false);

    // input clear
    if (fileRef.current) fileRef.current.value = "";
  };

  const handlePickImage = () => {
    fileRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // same structure follow
    // UI only (backend later)
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
            <span>Testimonials</span>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-black font-bold">Add Testimonial</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
        {/* Header bar */}
        <div className="px-6 py-4 bg-gray-100 border-b border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-800">
            Add Testimonial
          </h2>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Image Box */}
            <div className="lg:col-span-4">
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Choose Image
              </label>

              <div className="rounded-lg border border-gray-300 bg-gray-50 p-3">
                <div className="relative rounded-lg border border-dashed border-gray-300 bg-white h-[230px] flex items-center justify-center overflow-hidden">
                  {!imagePreview ? (
                    <button
                      type="button"
                      onClick={handlePickImage}
                      className="cursor-pointer select-none text-center"
                      title="Choose Image"
                    >
                      <div className="text-4xl">☁️</div>
                      <p className="mt-2 text-gray-500">Drag and drop</p>
                      <p className="mt-1 text-xs text-gray-400">
                        Click to choose
                      </p>
                    </button>
                  ) : (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* hidden input */}
                  <input
                    ref={fileRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    name="testimonial-image"
                  />
                </div>

                {/* Actions */}
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handlePickImage}
                    className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                  >
                    {hasImage ? "Change Image" : "Choose Image"}
                  </button>

                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    disabled={!hasImage}
                    className={`cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2
                      ${
                        hasImage
                          ? "bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98]"
                          : "bg-gray-300 cursor-not-allowed"
                      }`}
                    title="Remove selected image"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>

            {/* Right Inputs */}
            <div className="lg:col-span-8">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Designation */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Designation
                  </label>
                  <input
                    type="text"
                    required
                    name="designation"
                    placeholder="Designation"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Rating
                  </label>
                  <input
                    type="number"
                    required
                    name="rating"
                    placeholder="Rating"
                    min="1"
                    max="5"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Order */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Order
                  </label>
                  <input
                    type="number"
                    required
                    name="order"
                    placeholder="Order"
                    min="1"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="cursor-pointer select-none rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Add Testimonial
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
