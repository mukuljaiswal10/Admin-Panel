// src/Components/Pages/profile/CompanyProfile.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";

export default function CompanyProfile() {
  // ===== Image (preview / change / delete) =====
  const fileRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handlePickImage = () => fileRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // cleanup old preview
    if (previewUrl) URL.revokeObjectURL(previewUrl);

    const url = URL.createObjectURL(file);
    setImageFile(file);
    setPreviewUrl(url);
  };

  const handleDeleteImage = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setImageFile(null);
    setPreviewUrl("");
    if (fileRef.current) fileRef.current.value = "";
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // ===== Google Map URL -> Map Preview =====
  const [googleMapUrl, setGoogleMapUrl] = useState("");

  const mapEmbedSrc = useMemo(() => {
    const u = (googleMapUrl || "").trim();
    if (!u) return "";

    // If already embed URL pasted -> use directly
    if (u.includes("google.com/maps/embed")) return u;

    // Otherwise build embed preview from pasted URL/text
    return `https://www.google.com/maps?q=${encodeURIComponent(
      u
    )}&output=embed`;
  }, [googleMapUrl]);

  // ===== Mobile: only digits + max 10 (small input-level control) =====
  const handleMobileInput = (e) => {
    let v = e.target.value || "";
    v = v.replace(/\D/g, "").slice(0, 10);
    e.target.value = v;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ required

    // ✅ Backend API ka code yaha paste hoga (mentor later)
    // Example: FormData banake API call karo
    // const fd = new FormData(e.currentTarget);
    // fd.append("company_image", imageFile);
    // await api.updateCompanyProfile(fd);
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
          <li className="text-black font-bold">Company Profile</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Top grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Image box */}
              <div className="lg:col-span-5">
                <label className="text-sm font-semibold text-gray-700">
                  Company Profile Image
                </label>

                <div className="mt-2 rounded-xl border border-gray-300 bg-gray-50 p-4">
                  <div
                    className={`relative w-full h-56 rounded-xl border-2 border-dashed bg-white overflow-hidden flex items-center justify-center
                    ${previewUrl ? "border-indigo-300" : "border-gray-300"}`}
                  >
                    {!previewUrl ? (
                      <div className="text-center select-none">
                        <div className="text-3xl">☁️</div>
                        <div className="text-gray-500 mt-2">Drag and drop</div>

                        <button
                          type="button"
                          onClick={handlePickImage}
                          className="mt-4 cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200"
                        >
                          Choose Image
                        </button>
                      </div>
                    ) : (
                      <>
                        <img
                          src={previewUrl}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />

                        {/* Actions */}
                        <div className="absolute top-3 right-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={handlePickImage}
                            className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200"
                            title="Change Image"
                          >
                            Change
                          </button>

                          <button
                            type="button"
                            onClick={handleDeleteImage}
                            className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-bold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98] transition duration-200"
                            title="Delete Image"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}

                    {/* hidden input */}
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      name="company_image"
                      required={!previewUrl} // ✅ default validation
                    />
                  </div>
                </div>
              </div>

              {/* Right fields */}
              <div className="lg:col-span-7">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="Mobile Number"
                      inputMode="numeric"
                      pattern="^[0-9]{10}$"
                      maxLength={10}
                      onInput={handleMobileInput}
                      title="Enter 10 digit mobile number"
                      className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="mt-6">
              <textarea
                name="address"
                required
                placeholder="Address"
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
              />
            </div>

            {/* Google Map URL */}
            <div className="mt-4">
              <input
                type="url"
                name="google_map_url"
                required
                placeholder="Google Map URL"
                value={googleMapUrl}
                onChange={(e) => setGoogleMapUrl(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {/* Map Preview */}
            <div className="mt-4 overflow-hidden rounded-lg border border-gray-300 bg-white">
              {mapEmbedSrc ? (
                <iframe
                  title="google-map"
                  className="w-full h-44"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapEmbedSrc}
                />
              ) : (
                <div className="h-44 flex items-center justify-center text-sm text-gray-500">
                  Paste Google Map URL to preview map
                </div>
              )}
            </div>

            {/* Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="cursor-pointer select-none rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:scale-[0.98] transition duration-200"
              >
                Update Company Profile
              </button>
            </div>

            {/* Hidden info (optional, future use) */}
            <input
              type="hidden"
              name="image_removed"
              value={previewUrl ? "0" : "1"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
