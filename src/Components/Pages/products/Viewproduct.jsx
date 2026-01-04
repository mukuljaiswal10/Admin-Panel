// ViewProduct.jsx (Dark version like ViewColor)
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

export default function ViewProduct() {
  const [showSearch, setShowSearch] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1520975958225-39b17e1f79d4?auto=format&fit=crop&w=900&q=60"
  );

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  // ✅ modal open => body scroll lock
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [open]);

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
            <span>Products</span>
          </li>
          <li className="text-gray-400">/</li>

          <li>
            <Link
              to={"/products/add"}
              className="text-[blue] font-bold hover:underline"
            >
              Add Products
            </Link>
          </li>
          <li className="text-gray-400">/</li>

          <li className="text-black font-bold">View Products</li>
        </ol>
      </nav>
      {/* end */}

      {/* Search Box (Toggle) */}
      <div
        className={`transition-all duration-300 ${
          showSearch
            ? "max-h-40 opacity-100 mb-4"
            : "max-h-0 opacity-0 overflow-hidden mb-0"
        }`}
      >
        <div className="rounded-xl border bg-white p-4 shadow-sm">
          <form
            className="flex items-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search product..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 bg-[#0b1220] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
              name="view-product-search"
            />
            <button
              type="submit"
              className="cursor-pointer select-none rounded-lg px-3 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              title="Search (UI only)"
            >
              🔍
            </button>
          </form>
        </div>
      </div>

      {/* Header + actions */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Product Items</h2>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setShowSearch((prev) => !prev)}
            className="cursor-pointer select-none rounded-lg px-3 py-2 font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            title={showSearch ? "Close filter" : "Open filter"}
          >
            ☰
          </button>

          <button
            type="button"
            className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
            title="Change Status"
          >
            Change Status
          </button>

          <button
            type="button"
            className="cursor-pointer select-none rounded-lg px-4 py-2 font-semibold text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-xl active:scale-[0.98] transition duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2"
            title="Delete"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Dark table */}
      <div className="overflow-x-auto rounded-xl shadow bg-[#0f1724] border border-gray-800">
        {/* Table header */}
        <div className="min-w-[1200px] grid grid-cols-12 px-4 py-3 text-sm text-gray-300 font-semibold border-b border-gray-700 items-center">
          <div className="col-span-1">DELETE</div>
          <div className="col-span-1">S. NO.</div>
          <div className="col-span-2">PRODUCT NAME</div>
          <div className="col-span-2">DESCRIPTION</div>
          <div className="col-span-2">SHORT DESCRIPTION</div>
          <div className="col-span-1 text-center">THUMBNAILS</div>
          <div className="col-span-1 text-center">ACTION</div>
          <div className="col-span-1 text-center">STATUS</div>
          <div className="col-span-1 text-center"></div>
        </div>

        {/* ================= Row 1 ================= */}
        <div className="group relative min-w-[1200px] grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 items-center hover:bg-[#0c1320] transition duration-200">
          <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-500/70 transition" />

          <div className="col-span-1 flex items-start pt-1">
            <input type="checkbox" className="cursor-pointer" />
          </div>

          <div className="col-span-1 text-sm">1</div>
          <div className="col-span-2 font-medium">Men&apos;s</div>

          <div className="col-span-2">
            <div className="text-gray-300 text-sm">
              Lorem ipsum dolor sit...
            </div>
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer mt-1 text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              Read More
            </button>
          </div>

          <div className="col-span-2">
            <div className="text-gray-300 text-sm">
              Lorem ipsum dolor sit...
            </div>
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer mt-1 text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              Read More
            </button>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1520975958225-39b17e1f79d4?auto=format&fit=crop&w=160&q=60"
              alt="thumb"
              className="w-14 h-14 rounded-lg object-cover border border-gray-700"
            />
          </div>

          <div className="col-span-1 flex items-center justify-center gap-2">
            <button
              type="button"
              className="cursor-pointer select-none w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 hover:shadow-[0_0_18px_rgba(239,68,68,0.35)] active:scale-[0.98] transition duration-200 flex items-center justify-center text-white"
              title="Delete"
              aria-label="Delete"
            >
              🗑
            </button>

            <Link to={"/products/edit/1"}>
              <button
                type="button"
                className="cursor-pointer select-none w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] active:scale-[0.98] transition duration-200 flex items-center justify-center text-white"
                aria-label="Edit"
                title="Edit"
              >
                ✎
              </button>
            </Link>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span
              className="cursor-pointer select-none px-5 py-2 text-xs font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-200 hover:scale-[1.03] shadow-[0_0_10px_rgba(34,197,94,0.25)]"
              title="Active"
            >
              Active
            </span>
          </div>

          <div className="col-span-1" />
        </div>

        {/* ================= Row 2 ================= */}
        <div className="group relative min-w-[1200px] grid grid-cols-12 px-4 py-5 text-gray-200 border-b border-gray-700 items-center hover:bg-[#0c1320] transition duration-200">
          <span className="absolute left-0 top-0 h-full w-1 bg-transparent group-hover:bg-blue-500/70 transition" />

          <div className="col-span-1 flex items-start pt-1">
            <input type="checkbox" className="cursor-pointer" />
          </div>

          <div className="col-span-1 text-sm">2</div>
          <div className="col-span-2 font-medium">Men&apos;s</div>

          <div className="col-span-2">
            <div className="text-gray-300 text-sm">
              Lorem ipsum dolor sit...
            </div>
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer mt-1 text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              Read More
            </button>
          </div>

          <div className="col-span-2">
            <div className="text-gray-300 text-sm">
              Lorem ipsum dolor sit...
            </div>
            <button
              type="button"
              onClick={openModal}
              className="cursor-pointer mt-1 text-blue-400 hover:text-blue-300 hover:underline transition"
            >
              Read More
            </button>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1520975890704-8c63b1c3f1aa?auto=format&fit=crop&w=160&q=60"
              alt="thumb"
              className="w-14 h-14 rounded-lg object-cover border border-gray-700"
            />
          </div>

          <div className="col-span-1 flex items-center justify-center gap-2">
            <button
              type="button"
              className="cursor-pointer select-none w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 hover:shadow-[0_0_18px_rgba(239,68,68,0.35)] active:scale-[0.98] transition duration-200 flex items-center justify-center text-white"
              title="Delete"
              aria-label="Delete"
            >
              🗑
            </button>

            <Link to={"/products/edit/2"}>
              <button
                type="button"
                className="cursor-pointer select-none w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 hover:shadow-[0_0_18px_rgba(59,130,246,0.35)] active:scale-[0.98] transition duration-200 flex items-center justify-center text-white"
                aria-label="Edit"
                title="Edit"
              >
                ✎
              </button>
            </Link>
          </div>

          <div className="col-span-1 flex items-center justify-center">
            <span
              className="cursor-pointer select-none px-5 py-2 text-xs font-bold rounded-lg text-white bg-green-600 hover:bg-green-700 transition duration-200 hover:scale-[1.03] shadow-[0_0_10px_rgba(34,197,94,0.25)]"
              title="Active"
            >
              Active
            </span>
          </div>

          <div className="col-span-1" />
        </div>
      </div>

      {/* ===================== Modal ===================== */}
      <div
        className={`fixed inset-0 z-[60] ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          onClick={closeModal}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* panel */}
        <div
          className={`absolute left-1/2 top-1/2 w-[92%] max-w-6xl -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            open ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-300 overflow-hidden">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
              <h3 className="font-semibold text-gray-800">
                Product Image&apos;s &amp; Price
              </h3>

              <button
                type="button"
                onClick={closeModal}
                className="cursor-pointer select-none w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 active:scale-[0.98] transition flex items-center justify-center text-gray-700"
                aria-label="Close"
                title="Close"
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div className="p-5">
              <div className="flex gap-5">
                {/* big image */}
                <div className="w-[34%] min-w-[260px]">
                  <div className="border border-gray-200 rounded-lg p-2 bg-white">
                    <img
                      src={selectedImage}
                      alt="big"
                      className="w-full h-[330px] object-cover rounded-md"
                    />
                  </div>
                </div>

                {/* thumbnails */}
                <div className="flex-1">
                  <div className="flex gap-4 flex-wrap">
                    <Thumb
                      img="https://images.unsplash.com/photo-1520975682035-0d9f2a5e8f6c?auto=format&fit=crop&w=260&q=60"
                      onPick={(url) => setSelectedImage(url)}
                      active={selectedImage.includes("1520975682035")}
                    />
                    <Thumb
                      img="https://images.unsplash.com/photo-1520975791745-5c7b0b40b89d?auto=format&fit=crop&w=260&q=60"
                      onPick={(url) => setSelectedImage(url)}
                      active={selectedImage.includes("1520975791745")}
                    />
                    <Thumb
                      img="https://images.unsplash.com/photo-1520975756651-2c0b2f7401b6?auto=format&fit=crop&w=260&q=60"
                      onPick={(url) => setSelectedImage(url)}
                      active={selectedImage.includes("1520975756651")}
                    />
                    <Thumb
                      img="https://images.unsplash.com/photo-1520975802245-3b3c4f274507?auto=format&fit=crop&w=260&q=60"
                      onPick={(url) => setSelectedImage(url)}
                      active={selectedImage.includes("1520975802245")}
                    />
                  </div>
                </div>

                {/* details */}
                <div className="w-[28%] min-w-[240px] border-l border-gray-200 pl-5">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Product Details
                  </h4>

                  <div className="space-y-2 text-gray-700">
                    <Row label="Price" value="₹ 1500" />
                    <Row label="MRP" value="₹ 3000" />
                    <Row label="Manage Stock" value="In Stock" />
                    <Row label="Brand Name" value="Levi's" />
                    <Row label="Size" value="XL" />
                    <Row label="Color" value="Red" />
                  </div>
                </div>
              </div>

              {/* extra info */}
              <div className="mt-5 border-t border-gray-200 pt-4 text-sm text-gray-700">
                <div className="font-semibold text-gray-800 mb-1">
                  Full Description
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Molestias, voluptatem. Repellendus, vel. Iusto, obcaecati.
                </p>

                <div className="font-semibold text-gray-800 mt-3 mb-1">
                  Short Description
                </div>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Eaque, impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== /Modal ===================== */}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex gap-2">
      <div className="w-[120px] text-gray-600">{label} :</div>
      <div className="font-medium text-gray-800">{value || "-"}</div>
    </div>
  );
}

function Thumb({ img, onPick, active }) {
  const big = img.replace("w=260", "w=900");
  return (
    <button
      type="button"
      onClick={() => onPick(big)}
      className={`cursor-pointer select-none border rounded-lg p-1 bg-white hover:shadow-lg active:scale-[0.98] transition ${
        active ? "border-blue-500" : "border-gray-200"
      }`}
      title="Preview"
    >
      <img
        src={img}
        alt="thumb"
        className="w-28 h-28 object-cover rounded-md"
      />
    </button>
  );
}
