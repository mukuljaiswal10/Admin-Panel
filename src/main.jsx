import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Components/Pages/Login";
import MainLayout from "./Components/Common/MainLayout";
import Dashboard from "./Components/Pages/Dashboard";
import AddColor from "./Components/Pages/color/Addcolor";
import ViewColor from "./Components/Pages/color/Viewcolor";
import ViewUser from "./Components/Pages/users/ViewUser";
import ViewEnquiry from "./Components/Pages/enquirys/ContactEnquiry";
import NewsletterManagement from "./Components/Pages/enquirys/NewslettersManagement";
import AddMaterial from "./Components/Pages/materials/Addmaterial";
import ViewMaterial from "./Components/Pages/materials/Viewmaterial";
import AddCategory from "./Components/Pages/parent-categorys/Addcategory";
import ViewCategory from "./Components/Pages/parent-categorys/Viewcategory";
import AddSubCategory from "./Components/Pages/sub-categorys/Addsubcategory";
import ViewSubCategory from "./Components/Pages/sub-categorys/Viewsubcategory";
import AddSubSubCategory from "./Components/Pages/sub-sub-category/Addsubsubcategory";
import ViewSubSubCategory from "./Components/Pages/sub-sub-category/Viewsubsubcategory";
import AddProduct from "./Components/Pages/products/Addproduct";
import ViewProductItems from "./Components/Pages/products/Viewproduct";
import AddWhyChooseUs from "./Components/Pages/why-we-choose-us/Addwhychooseus";
import ViewWhyChooseUs from "./Components/Pages/why-we-choose-us/Viewwhychooseus";
import OrderList from "./Components/Pages/orders/Orderlist";
import AddSlider from "./Components/Pages/sliders/Addslider";
import ViewSlider from "./Components/Pages/sliders/Viewslider";
import AddCountry from "./Components/Pages/country/Addcountry";
import ViewCountry from "./Components/Pages/country/Viewcountry";
import AddTestimonial from "./Components/Pages/testimonial/Addtestimonial";
import ViewTestimonial from "./Components/Pages/testimonial/Viewtestimonial";
import Addfaq from "./Components/Pages/faq/Addfaq";
import ViewFaq from "./Components/Pages/faq/Viewfaq";
import Profile from "./Components/Pages/profile/Profile";
import CompanyProfile from "./Components/Pages/profile/CompanyProfile";
import Logout from "./Components/Pages/profile/Logout";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* public */}
        <Route path={"/"} element={<Login />} />
        {/* end */}

        {/* Layout routes */}
        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          {/* profile-routing */}
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/company-profile" element={<CompanyProfile/>}/>
          <Route path="/logout" element={<Logout/>}/> 
          {/* end */}

          {/* users-routing */}
          <Route path="users">
            <Route path="view" element={<ViewUser />} />
            {/* <Route path="edit/:id" element={<ViewUser />} /> */}
          </Route>
          {/* end */}

          {/* enquirys-routing */}
          <Route path="enquirys">
            <Route path="contact-enquirys" element={<ViewEnquiry />} />
            <Route path="newsletters" element={<NewsletterManagement />} />
          </Route>
          {/* end */}

          {/* colors-routing */}
          <Route path="color">
            <Route path="add" element={<AddColor />} />
            <Route path="edit/:id" element={<AddColor />} />
            <Route path="view" element={<ViewColor />} />
          </Route>
          {/* end */}

          {/* materials-routing */}
          <Route path="materials">
            <Route path="add" element={<AddMaterial />} />
            <Route path="edit/:id" element={<AddMaterial />} />
            <Route path="view" element={<ViewMaterial />} />
          </Route>
          {/* end */}

          {/* parent-category-rounting */}
          <Route path="category">
            <Route path="add" element={<AddCategory />} />
            <Route path="edit/:id" element={<AddCategory />} />
            <Route path="view" element={<ViewCategory />} />
          </Route>
          {/* end */}

          {/* sub-categorys-routing */}
          <Route path="category/sub-category">
            <Route path="add" element={<AddSubCategory />} />
            <Route path="edit/:id" element={<AddSubCategory />} />
            <Route path="view" element={<ViewSubCategory />} />
          </Route>
          {/* end */}

          {/* sub-sub-category-rounting */}
          <Route path="category/sub-sub-category">
            <Route path="add" element={<AddSubSubCategory />} />
            <Route path="edit/:id" element={<AddSubSubCategory />} />
            <Route path="view" element={<ViewSubSubCategory />} />
          </Route>
          {/* end */}

          {/* products-routing */}
          <Route path="products">
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<AddProduct />} />
            <Route path="view" element={<ViewProductItems />} />
          </Route>
          {/* end */}

          {/* addwhychooseus-routing */}
          <Route path="why-choose-us">
            <Route path="add" element={<AddWhyChooseUs />} />
            <Route path="edit/:id" element={<AddWhyChooseUs />} />
            <Route path="view" element={<ViewWhyChooseUs />} />
          </Route>
          {/* end */}

          {/* orders-routing */}
          <Route path="orders">
            <Route path="orders" element={<OrderList />} />
          </Route>
          {/* end */}

          {/* sliders-routing */}
          <Route path="sliders">
            <Route path="add" element={<AddSlider />} />
            <Route path="edit/:id" element={<AddSlider />} />
            <Route path="view" element={<ViewSlider />} />
          </Route>
          {/* end */}

          {/* country-routing */}
          <Route path="country">
            <Route path="add" element={<AddCountry />} />
            <Route path="edit/:id" element={<AddCountry />} />
            <Route path="view" element={<ViewCountry />} />
          </Route>
          {/* end */}

          {/* testimonial-routing */}
          <Route path="testimonial">
            <Route path="add" element={<AddTestimonial />} />
            <Route path="edit/:id" element={<AddTestimonial />} />
            <Route path="view" element={<ViewTestimonial />} />
          </Route>
          {/* end */}

          {/* faq-routing */}
          <Route path="faq">
            <Route path="add" element={<Addfaq />} />
            <Route path="edit/:id" element={<Addfaq />} />
            <Route path="view" element={<ViewFaq />} />
          </Route>
          {/* end */}
        </Route>
        {/* end */}

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
