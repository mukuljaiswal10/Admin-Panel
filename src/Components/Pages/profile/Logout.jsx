import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // yaha real logout logic
    // localStorage.removeItem("token");
    // localStorage.removeItem("user");

    navigate("/login", { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="rounded-xl border bg-white p-6 shadow-sm text-center">
        <div className="text-2xl font-bold text-gray-800">Logging out...</div>
        <div className="text-sm text-gray-500 mt-2">Please wait</div>
      </div>
    </div>
  );
}
