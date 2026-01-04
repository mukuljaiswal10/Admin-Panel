import React, { useState } from "react";
import { Link, Navigate } from "react-router";
import { MdDashboard } from "react-icons/md";
import { FaNotEqual, FaUsers } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaRegDotCircle } from "react-icons/fa";
import { BiCategory, BiEnvelope, BiSlider } from "react-icons/bi";
import { DiDropbox, DiMaterializecss } from "react-icons/di";
import { CgLock, CgProductHunt } from "react-icons/cg";
import { GrOrderedList } from "react-icons/gr";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbQuestionMark } from "react-icons/tb";
import { FaQ } from "react-icons/fa6";
export default function SideBar() {
  let [openMenu, setOpenMenu] = useState(0);

  return (
    <>
      <section className="h-screen overflow-y-scroll bg-[#1F2937]">
        <div className="sticky top-0 bg-[black] z-[9999] py-5 border-b-2 border-amber-50">
          <Link to={"/dashboard"}>
            <img className="mx-auto" src="/images/logo.svg" />
          </Link>
        </div>

        {/* dashboard */}
        <h3 className="text-[white] font-bold py-2 flex justify-center hover:bg-[#2f363f] m-2 rounded-2xl">
          <Link className="flex items-center gap-2" to={"/dashboard"}>
            <MdDashboard />
            Dashboard
          </Link>
        </h3>
        {/* end */}

        <hr className="text-[grey]" />

        {/* users */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 1 ? 0 : 1)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <FaUsers />
            Users
            {openMenu == 1 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 1 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/users/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View User
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* enquirys */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 2 ? 0 : 2)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <BiEnvelope />
            Enquirys
            {openMenu == 2 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 2 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/enquirys/contact-enquirys"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Contact Enquirys
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/enquirys/newsletters"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Newsletters
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* colors */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 3 ? 0 : 3)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <DiDropbox />
            Colors
            {openMenu == 3 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 3 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"color/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Colors
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"color/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Color
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* materials */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 4 ? 0 : 4)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <DiMaterializecss />
            Materials
            {openMenu == 4 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 4 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"materials/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Material
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"materials/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Materials
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* parent-category */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 5 ? 0 : 5)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <BiCategory />
            Parent Categorys
            {openMenu == 5 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 5 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Category
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Category
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* sub-categorys */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 6 ? 0 : 6)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <BiCategory />
            Sub Categorys
            {openMenu == 6 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 6 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/sub-category/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Sub Category
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/sub-category/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Sub Category
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* sub-sub-category */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 7 ? 0 : 7)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[13px]"
          >
            <BiCategory />
            Sub Sub Categorys
            {openMenu == 7 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 7 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/sub-sub-category/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Sub Sub Category
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"category/sub-sub-category/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Sub Sub Category
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* products */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 8 ? 0 : 8)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <CgProductHunt />
            Products
            {openMenu == 8 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 8 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"products/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Products
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"products/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Products
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* why-we-choose-us */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 9 ? 0 : 9)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <CgLock />
            Why Choose Us ?
            {openMenu == 9 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 9 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/why-choose-us/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Why Choose us
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/why-choose-us/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Why Choose Us
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* orders */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 10 ? 0 : 10)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <GrOrderedList />
            Orders
            {openMenu == 10 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 10 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/orders/orders"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Orders
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* slider */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 11 ? 0 : 11)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <BiSlider/>
            Sliders
            {openMenu == 11 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 11 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"sliders/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Slider
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"sliders/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Slider
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* country */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 12 ? 0 : 12)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <CiLocationArrow1/>
            Country
            {openMenu == 12 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 12 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"country/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Country
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"country/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Country
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* testimonial */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 13 ? 0 : 13)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <TbQuestionMark/>
            Testimonials
            {openMenu == 13 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 13 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/testimonial/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add Testimonials
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/testimonial/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View Testimonials
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        {/* faq */}
        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 14 ? 0 : 14)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[14px]"
          >
            <FaQ/>
            FAQS
            {openMenu == 14 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 14 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/faq/add"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Add FAQS
                </Link>
              </li>
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"/faq/view"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  View FAQS
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* end */}

        <div className="">
          <div
            onClick={() => setOpenMenu(openMenu == 15 ? 0 : 15)}
            className="flex items-center gap-2 py-2 rounded-2xl font-bold text-[white] m-2 hover:bg-[#2f363f] tracking-[1px] cursor-pointer ps-5 relative text-[12px]"
          >
            <FaNotEqual/>
            Terms & Conditions
            {openMenu == 15 ? (
              <IoIosArrowUp className="absolute right-[10px]" />
            ) : (
              <IoIosArrowDown className="absolute right-[10px]" />
            )}
          </div>

          {openMenu == 15 && (
            <ul className="text-[white] px-5">
              <li className="flex gap-2 items-center hover:bg-[#2f363f] py-2 rounded-2xl ps-5">
                <Link to={"#"} className="flex items-center gap-2 text-[13px]">
                  <FaRegDotCircle />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
