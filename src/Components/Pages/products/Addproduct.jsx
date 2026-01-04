// AddProduct.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export default function AddProduct() {
  // =========================
  // Image refs
  // =========================
  const productImgRef = useRef(null);
  const backImgRef = useRef(null);
  const galleryImgRef = useRef(null);

  // =========================
  // Image states
  // =========================
  const [productFile, setProductFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [galleryFile, setGalleryFile] = useState(null);

  const [productPreview, setProductPreview] = useState("");
  const [backPreview, setBackPreview] = useState("");
  const [galleryPreview, setGalleryPreview] = useState("");

  // =========================
  // Description (Simple JS Editor)
  // =========================
  const editorBoxRef = useRef(null);
  const [description, setDescription] = useState("");

  const runCmd = (cmd) => {
    // execCommand deprecated but still works in all major browsers (simple admin use)
    document.execCommand(cmd, false, null);
    editorBoxRef.current?.focus();
    onEditorInput();
  };

  const onEditorInput = () => {
    setDescription(editorBoxRef.current?.innerHTML || "");
  };

  // =========================
  // Preview creators
  // =========================
  useEffect(() => {
    if (!productFile) return setProductPreview("");
    const url = URL.createObjectURL(productFile);
    setProductPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [productFile]);

  useEffect(() => {
    if (!backFile) return setBackPreview("");
    const url = URL.createObjectURL(backFile);
    setBackPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [backFile]);

  useEffect(() => {
    if (!galleryFile) return setGalleryPreview("");
    const url = URL.createObjectURL(galleryFile);
    setGalleryPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [galleryFile]);

  // =========================
  // Helpers
  // =========================
  const pickImage = (file, setter) => {
    if (!file) return;
    if (!file.type?.startsWith("image/")) return;
    setter(file);
  };

  const removeFile = (setter, ref) => {
    setter(null);
    if (ref?.current) ref.current.value = "";
  };

  const openDialog = (ref) => ref?.current?.click();

  const onSubmit = (e) => {
    e.preventDefault();

    // backend later
    // const fd = new FormData(e.target);
    // fd.get("description") => HTML string
  };

  // required validation ke liye (blank html check)
  const plainText = description
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const descValueForRequired = plainText ? description : "";

  // =========================
  // Reusable DropBox
  // =========================
  const DropBox = ({ label, inputName, fileRef, preview, setFile }) => {
    const onDrop = (e) => {
      e.preventDefault();
      pickImage(e.dataTransfer.files?.[0], setFile);
    };

    const onDragOver = (e) => e.preventDefault();

    

    return (
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          {label}
        </label>

        <div
          className="relative rounded-md border border-gray-300 bg-white h-[160px] flex items-center justify-center overflow-hidden cursor-pointer hover:border-blue-400 hover:shadow-sm transition"
          onDrop={onDrop}
          onDragOver={onDragOver}
          onClick={() => openDialog(fileRef)}
          role="button"
          tabIndex={0}
          title="Click or Drag & Drop"
        >
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            name={inputName}
            required
            onChange={(e) => pickImage(e.target.files?.[0], setFile)}
          />

          {!preview ? (
            <div className="text-center select-none">
              <div className="text-4xl mb-1">☁️</div>
              <p className="text-gray-500">Drag and drop</p>
            </div>
          ) : (
            <>
              <img
                src={preview}
                alt={label}
                className="absolute inset-0 w-full h-full object-contain bg-white"
              />

              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    openDialog(fileRef);
                  }}
                  className="cursor-pointer select-none px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md active:scale-[0.98] transition duration-200"
                >
                  Change
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(setFile, fileRef);
                  }}
                  className="cursor-pointer select-none px-3 py-1.5 text-xs font-semibold rounded-md text-white bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-700 hover:to-red-700 hover:shadow-md active:scale-[0.98] transition duration-200"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-gray-50 p-6">
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
          <li className="text-black font-bold">Add Product</li>
        </ol>
      </nav>
      {/* end */}

      {/* Card */}
      <div className="rounded-xl border border-gray-300 bg-white shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-300 bg-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add Product</h2>
        </div>

        <form onSubmit={onSubmit} className="p-5">
          {/* Top Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT: Images */}
            <div className="lg:col-span-5 space-y-4">
              <DropBox
                label="Product Image"
                inputName="product_image"
                fileRef={productImgRef}
                preview={productPreview}
                setFile={setProductFile}
              />

              <DropBox
                label="Back Image"
                inputName="back_image"
                fileRef={backImgRef}
                preview={backPreview}
                setFile={setBackFile}
              />

              <DropBox
                label="Gallery Image"
                inputName="gallery_image"
                fileRef={galleryImgRef}
                preview={galleryPreview}
                setFile={setGalleryFile}
              />
            </div>

            {/* RIGHT: Fields */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Product Name
                  </label>
                  <input
                    required
                    name="product_name"
                    type="text"
                    placeholder="Product Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Parent Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Parent Category
                  </label>
                  <select
                    required
                    name="parent_category_id"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Men&apos;s</option>
                    <option value="2">Women</option>
                    <option value="3">Sale</option>
                  </select>
                </div>

                {/* Sub Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Sub Category
                  </label>
                  <select
                    required
                    name="sub_category_id"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Select Category
                    </option>
                    <option value="11">Men</option>
                    <option value="12">Women</option>
                  </select>
                </div>

                {/* Sub Sub Category */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Sub Sub Category
                  </label>
                  <select
                    required
                    name="sub_sub_category_id"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="21">Shoe</option>
                    <option value="22">T-Shirt</option>
                  </select>
                </div>

                {/* Material */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Material
                  </label>
                  <select
                    required
                    name="material_id"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Cotton</option>
                    <option value="2">Leather</option>
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Color
                  </label>
                  <select
                    required
                    name="color_id"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Red</option>
                    <option value="2">Black</option>
                  </select>
                </div>

                {/* Product Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Select Product Type
                  </label>
                  <select
                    required
                    name="product_type"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="simple">Simple</option>
                    <option value="variant">Variant</option>
                  </select>
                </div>

                {/* Is Best Selling */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Is Best Selling
                  </label>
                  <select
                    required
                    name="is_best_selling"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                {/* Is Top Rated */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Is Top Rated
                  </label>
                  <select
                    required
                    name="is_top_rated"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                {/* Is Upsell */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Is Upsell
                  </label>
                  <select
                    required
                    name="is_upsell"
                    defaultValue=""
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    <option value="" disabled>
                      Nothing Selected
                    </option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>

                {/* Actual Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Actual Price
                  </label>
                  <input
                    required
                    name="actual_price"
                    type="number"
                    step="0.01"
                    placeholder="Actual Price"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Sale Price */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Sale Price
                  </label>
                  <input
                    required
                    name="sale_price"
                    type="number"
                    step="0.01"
                    placeholder="Sale Price"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>

                {/* Total In Stocks */}
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    Total In Stocks
                  </label>
                  <input
                    required
                    name="total_in_stocks"
                    type="number"
                    step="1"
                    placeholder="Total In Stocks"
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
                    name="order"
                    type="number"
                    step="1"
                    placeholder="Order"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description (Simple JS Editor) */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Description
            </label>

            {/* Toolbar */}
            <div className="border border-gray-300 rounded-t-md bg-gray-50 px-3 py-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => runCmd("bold")}
                className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 active:scale-[0.98] transition"
                title="Bold"
              >
                <b>B</b>
              </button>

              <button
                type="button"
                onClick={() => runCmd("italic")}
                className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 active:scale-[0.98] transition"
                title="Italic"
              >
                <i>I</i>
              </button>

              <button
                type="button"
                onClick={() => runCmd("underline")}
                className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 active:scale-[0.98] transition"
                title="Underline"
              >
                <u>U</u>
              </button>

              <span className="h-5 w-px bg-gray-300 mx-1" />

              <button
                type="button"
                onClick={() => runCmd("insertUnorderedList")}
                className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 active:scale-[0.98] transition"
                title="Bullet List"
              >
                ••
              </button>

              <button
                type="button"
                onClick={() => runCmd("insertOrderedList")}
                className="cursor-pointer px-2 py-1 rounded hover:bg-gray-200 active:scale-[0.98] transition"
                title="Numbered List"
              >
                1.
              </button>
            </div>

            {/* Editor */}
            <div
              ref={editorBoxRef}
              contentEditable
              onInput={onEditorInput}
              className="min-h-[200px] border border-gray-300 rounded-b-md px-4 py-3 bg-white focus:outline-none"
              data-placeholder="Write product description..."
              style={{ whiteSpace: "pre-wrap" }}
            />

            {/* Required + backend field */}
            <input
              type="text"
              name="description"
              required
              value={descValueForRequired}
              readOnly
              className="sr-only"
            />
          </div>

          {/* Submit */}
          <div className="mt-6">
            <button
              type="submit"
              className="cursor-pointer select-none px-5 py-2.5 rounded-md font-semibold text-white bg-gradient-to-r from-indigo-700 to-blue-700 hover:from-indigo-800 hover:to-blue-800 hover:shadow-lg active:scale-[0.98] transition duration-200"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>

      {/* Placeholder for contentEditable */}
      <style>{`
        [contenteditable="true"]:empty:before {
          content: attr(data-placeholder);
          color: #9ca3af;
        }
      `}</style>
    </div>
  );
}
