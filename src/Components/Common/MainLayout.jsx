import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router";
import Header from "./Header";

export default function MainLayout() {
  return (
    <>
      <section className="grid grid-cols-[15%_auto] gap-[20px] h-screen">
        <SideBar />
        <div className="h-screen overflow-y-scroll">
          <Header />
          <Outlet />
        </div>
      </section>
    </>
  );
}
