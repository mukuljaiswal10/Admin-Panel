import React, { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const goLogout = () => {
    navigate("/logout");
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          {/* Hamburger Icon */}
          <button className="p-2 rounded-md hover:bg-gray-100">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        </div>

        {/* RIGHT SIDE (Avatar + Dropdown) */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* Avatar */}
          <button className="cursor-pointer w-10 h-10 rounded-full overflow-hidden border border-gray-200 shadow-sm">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-full h-full object-cover"
            />
          </button>

          {/* DROPDOWN MENU */}
          {open && (
            <div className="absolute right-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden animate-fadeIn">
              {/* Profile */}
              <Link to="/profile">
                <button className="w-full cursor-pointer px-4 py-3 flex items-center gap-2 text-gray-700 hover:bg-gray-100">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A9 9 0 1118.88 4.195a9 9 0 01-13.758 13.61z"
                    />
                  </svg>
                  Profile
                </button>
              </Link>

              {/* Company Profile */}
              <Link to="/company-profile">
                <button className="w-full cursor-pointer px-4 py-3 flex items-center gap-2 text-gray-700 hover:bg-gray-100 border-t border-gray-200">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7v13h18V7l-9-4-9 4z"
                    />
                  </svg>
                  Company Profile
                </button>
              </Link>

              {/* Logout */}
              <button
                type="button"
                onclick={goLogout}
                className="w-full cursor-pointer px-4 py-3 flex items-center gap-2 text-gray-700 hover:bg-gray-100 border-t border-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
