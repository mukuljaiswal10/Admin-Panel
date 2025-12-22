import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Components/Pages/Login";
import MainLayout from "./Components/Common/MainLayout";
import Dashboard from "./Components/Pages/Dashboard";
import ViewUser from "./Components/Pages/ViewUser";
import ContactEnquiry from "./Components/Pages/ContactEnquiry";
import NewslettersManagement from "./Components/Pages/NewslettersManagement";
import Addcolor from "./Components/Pages/Addcolor";
import Viewcolor from "./Components/Pages/Viewcolor";
import Addmaterial from "./Components/Pages/Addmaterial";
import Viewmaterial from "./Components/Pages/Viewmaterial";
import Addcategory from "./Components/Pages/Addcategory";
import Viewcategory from "./Components/Pages/Viewcategory";
import Addsubcategory from "./Components/Pages/Addsubcategory";
import Viewsubcategory from "./Components/Pages/Viewsubcategory";
import Addsubsubcategory from "./Components/Pages/Addsubsubcategory";
import Viewsubsubcategory from "./Components/Pages/Viewsubsubcategory";
import Addproduct from "./Components/Pages/Addproduct";
import Viewproduct from "./Components/Pages/Viewproduct";
import Orderlist from "./Components/Pages/Orderlist";
import Addfaq from "./Components/Pages/Addfaq";
import Viewfaq from "./Components/Pages/Viewfaq";
import Addtestimonial from "./Components/Pages/Addtestimonial";
import ViewTestimonial from "./Components/Pages/Viewtestimonial";
import Addcountry from "./Components/Pages/Addcountry";
import Viewcountry from "./Components/Pages/Viewcountry";
import Addslider from "./Components/Pages/Addslider";
import Viewslider from "./Components/Pages/Viewslider";
import Addwhychooseus from "./Components/Pages/Addwhychooseus";
import Viewwhychooseus from "./Components/Pages/Viewwhychooseus";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/viewuser" element={<ViewUser/>}/>
        <Route path="/contactenquiry" element={<ContactEnquiry/>}/>
        <Route path="/nlm" element={<NewslettersManagement/>}/>
        <Route path="/addcolor" element={<Addcolor/>}/>
        <Route path="/viewcolor" element={<Viewcolor/>}/>
        <Route path="/addmaterial" element={<Addmaterial/>}/>
        <Route path="/viewmaterial" element={<Viewmaterial/>}/>
        <Route path="/addcategory" element={<Addcategory/>}/>
        <Route path="/viewcategory" element={<Viewcategory/>}/>
        <Route path="/addsubcategory" element={<Addsubcategory/>}/>
        <Route path="/viewsubcategory" element={<Viewsubcategory/>}/>
        <Route path="/addsubsubcategory" element={<Addsubsubcategory/>}/>
        <Route path="/viewsubsubcategory" element={<Viewsubsubcategory/>}/>
        <Route path="/addproduct" element={<Addproduct/>}/>
        <Route path="/viewproduct" element={<Viewproduct/>}/>
        <Route path="/addwhychooseus" element={<Addwhychooseus/>}/>
        <Route path="/viewwhychooseus" element={<Viewwhychooseus/>}/>
        <Route path="/orderlist" element={<Orderlist/>}/>
        <Route path="/addslider" element={<Addslider/>}/>
        <Route path="/viewslider" element={<Viewslider/>}/>
        <Route path="/addcountry" element={<Addcountry/>}/>
        <Route path="/viewcountry" element={<Viewcountry/>}/>
        <Route path="/addtestimonial" element={<Addtestimonial/>}/>
        <Route path="/viewtestimonial" element={<ViewTestimonial/>}/>
        <Route path="/addfaq" element={<Addfaq/>}/>
        <Route path="/viewfaq" element={<Viewfaq/>}/>
        </Route>
        <Route path={"/"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
