// src/Components/Pages/profile/Profile.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("edit"); // "edit" | "password"

  // image logic
  const fileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const previewUrl = useMemo(() => {
    if (!selectedFile) return "";
    return URL.createObjectURL(selectedFile);
  }, [selectedFile]);

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handlePickImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleDeleteImage = () => {
    setSelectedFile(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleChangeImage = () => {
    fileRef.current?.click();
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
          <li className="text-black font-bold">Profile</li>
        </ol>
      </nav>

      <div className="grid grid-cols-12 gap-6">
        {/* Left card */}
        <div className="col-span-12 lg:col-span-4">
          <div className="rounded-xl border bg-white shadow-sm p-6">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border bg-gray-100">
                <img
                  src="https://i.pravatar.cc/200?img=12"
                  alt="Admin"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-2 font-medium text-gray-800">Admin</p>
            </div>

            <div className="mt-6 rounded-lg bg-gray-50 p-4 border">
              <p className="font-semibold text-gray-800 mb-3">
                Contact Information
              </p>

              <div className="flex items-center gap-3 text-gray-700 mb-2">
                <span className="w-7 h-7 rounded-md bg-white border flex items-center justify-center text-xs">
                  📱
                </span>
                <span>1234567890</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <span className="w-7 h-7 rounded-md bg-white border flex items-center justify-center text-xs">
                  ✉️
                </span>
                <span>xyz@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="col-span-12 lg:col-span-8">
          <div className="rounded-xl border bg-white shadow-sm p-6">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b pb-3">
              <button
                type="button"
                onClick={() => setActiveTab("edit")}
                className={`cursor-pointer font-semibold pb-2 transition ${
                  activeTab === "edit"
                    ? "text-gray-900 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Edit Profile
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("password")}
                className={`cursor-pointer font-semibold pb-2 transition ${
                  activeTab === "password"
                    ? "text-gray-900 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Change Password
              </button>
            </div>

            {/* EDIT PROFILE TAB */}
            {activeTab === "edit" && (
              <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-12 gap-6">
                  {/* Choose image */}
                  <div className="col-span-12 md:col-span-5">
                    <p className="text-sm font-semibold text-gray-700 mb-2">
                      Choose Image
                    </p>

                    <div className="rounded-lg border bg-gray-50 p-3">
                      <div className="relative rounded-lg border-2 border-dashed border-gray-300 bg-white h-56 flex items-center justify-center overflow-hidden">
                        {!selectedFile ? (
                          <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer select-none">
                            <div className="text-3xl">☁️</div>
                            <p className="mt-2 text-gray-500">Profile</p>

                            {/* file input */}
                            <input
                              ref={fileRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handlePickImage}
                              name="profile_image"
                              required
                            />
                          </label>
                        ) : (
                          <>
                            <img
                              src={previewUrl}
                              alt="Preview"
                              className="w-full h-full object-cover"
                            />

                            {/* overlay actions */}
                            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                              <button
                                type="button"
                                onClick={handleChangeImage}
                                className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition"
                              >
                                Change
                              </button>

                              <button
                                type="button"
                                onClick={handleDeleteImage}
                                className="cursor-pointer select-none rounded-lg px-3 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 active:scale-[0.98] transition"
                              >
                                Delete
                              </button>
                            </div>

                            {/* hidden input for re-pick */}
                            <input
                              ref={fileRef}
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handlePickImage}
                              name="profile_image"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="col-span-12 md:col-span-7">
                    <div className="mb-4">
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

                    <div className="mb-4">
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

                    <div className="mb-6">
                      <label className="text-sm font-semibold text-gray-700">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        name="mobile"
                        required
                        placeholder="Number"
                        inputMode="numeric"
                        pattern="^[6-9]\d{9}$"
                        maxLength={10}
                        title="Enter valid 10 digit mobile number (starts with 6-9)"
                        className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex justify-center">
                  <button
                    type="submit"
                    className="cursor-pointer select-none rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:scale-[0.98] transition"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            )}

            {/* CHANGE PASSWORD TAB */}
            {activeTab === "password" && (
              <form className="mt-6" onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-700">
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="current_password"
                    required
                    placeholder="Current Password"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-700">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="new_password"
                    required
                    placeholder="New Password"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-sm font-semibold text-gray-700">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    required
                    placeholder="Confirm Password"
                    className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="cursor-pointer select-none rounded-lg px-6 py-3 font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl active:scale-[0.98] transition"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
