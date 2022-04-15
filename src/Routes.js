import React from "react";
import PropertyDetail1 from "pages/PropertyDetail1";
import OrderList from "pages/OrderList";
import PropertyDetail from "pages/PropertyDetail";
import PropertyPage from "pages/PropertyPage";
import LandingPage1 from "pages/LandingPage1";
import InvoiceDetailWeb from "pages/InvoiceDetailWeb";
import Artboard3 from "pages/Artboard3";
import Artboard2 from "pages/Artboard2";
import Artboard1 from "pages/Artboard1";
import Artboard from "pages/Artboard";
import BlogDetail7 from "pages/BlogDetail7";
import BlogDetail6 from "pages/BlogDetail6";
import BlogDetail5 from "pages/BlogDetail5";
import BlogDetail4 from "pages/BlogDetail4";
import Home3 from "pages/Home3";
import DesktopHD from "pages/DesktopHD";
import Screen from "pages/Screen";
import DigtalAgency from "pages/DigtalAgency";
import ContactUs6 from "pages/ContactUs6";
import LoginRegister from "pages/LoginRegister";
import ContactSimple from "pages/ContactSimple";
import CarReservation from "pages/CarReservation";
import Home2 from "pages/Home2";
import Page6 from "pages/Page6";
import Page5 from "pages/Page5";
import Page4 from "pages/Page4";
import Page3 from "pages/Page3";
import Page2 from "pages/Page2";
import Contact3 from "pages/Contact3";
import Contact2 from "pages/Contact2";
import HeroImage from "pages/HeroImage";
import Business002 from "pages/Business002";
import LandingPage from "pages/LandingPage";
import Restaurant001 from "pages/Restaurant001";
import Restaurant002 from "pages/Restaurant002";
import Donation from "pages/Donation";
import Beauty from "pages/Beauty";
import RealEstate from "pages/RealEstate";
import Travel1 from "pages/Travel1";
import Travel from "pages/Travel";
import Blogalt1 from "pages/Blogalt1";
import ECommerce002 from "pages/ECommerce002";
import Ecommerce from "pages/Ecommerce";
import Medical002 from "pages/Medical002";
import BlogDetail3 from "pages/BlogDetail3";
import Home1 from "pages/Home1";
import BlogDetail2 from "pages/BlogDetail2";
import ContactUs5 from "pages/ContactUs5";
import Reservation1 from "pages/Reservation1";
import ContactUs4 from "pages/ContactUs4";
import Cart1 from "pages/Cart1";
import Checkout4 from "pages/Checkout4";
import PersonalBlogPostwithsidebar3 from "pages/PersonalBlogPostwithsidebar3";
import Reservation from "pages/Reservation";
import ContactUs3 from "pages/ContactUs3";
import TemplateCategory2 from "pages/TemplateCategory2";
import Cart from "pages/Cart";
import Checkout3 from "pages/Checkout3";
import ContactUs2 from "pages/ContactUs2";
import PersonalBlogPostwithsidebar2 from "pages/PersonalBlogPostwithsidebar2";
import HomeStyle from "pages/HomeStyle";
import ContactUs1 from "pages/ContactUs1";
import ShoppingCart from "pages/ShoppingCart";
import HeroSection from "pages/HeroSection";
import BlogDetail1 from "pages/BlogDetail1";
import Ticket from "pages/Ticket";
import Contact1 from "pages/Contact1";
import FAQ from "pages/FAQ";
import VaccineInformation from "pages/VaccineInformation";
import ContactPage from "pages/ContactPage";
import Checkout2 from "pages/Checkout2";
import Page1 from "pages/Page1";
import Checkout1 from "pages/Checkout1";
import ContactUs from "pages/ContactUs";
import BookTable from "pages/BookTable";
import Page from "pages/Page";
import BlogDetail from "pages/BlogDetail";
import Contact from "pages/Contact";
import Checkout from "pages/Checkout";
import HomepageV2 from "pages/HomepageV2";
import HomepageV1 from "pages/HomepageV1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/homepagev1" element={<HomepageV1 />} />
        <Route path="/homepagev2" element={<HomepageV2 />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        <Route path="/page" element={<Page />} />
        <Route path="/booktable" element={<BookTable />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/checkout1" element={<Checkout1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/checkout2" element={<Checkout2 />} />
        <Route path="/contactpage" element={<ContactPage />} />
        <Route path="/vaccineinformation" element={<VaccineInformation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact1" element={<Contact1 />} />
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/blogdetail1" element={<BlogDetail1 />} />
        <Route path="/herosection" element={<HeroSection />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/contactus1" element={<ContactUs1 />} />
        <Route path="/homestyle" element={<HomeStyle />} />
        <Route
          path="/personalblogpostwithsidebar2"
          element={<PersonalBlogPostwithsidebar2 />}
        />
        <Route path="/contactus2" element={<ContactUs2 />} />
        <Route path="/checkout3" element={<Checkout3 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/templatecategory2" element={<TemplateCategory2 />} />
        <Route path="/contactus3" element={<ContactUs3 />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route
          path="/personalblogpostwithsidebar3"
          element={<PersonalBlogPostwithsidebar3 />}
        />
        <Route path="/checkout4" element={<Checkout4 />} />
        <Route path="/cart1" element={<Cart1 />} />
        <Route path="/contactus4" element={<ContactUs4 />} />
        <Route path="/reservation1" element={<Reservation1 />} />
        <Route path="/contactus5" element={<ContactUs5 />} />
        <Route path="/blogdetail2" element={<BlogDetail2 />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/blogdetail3" element={<BlogDetail3 />} />
        <Route path="/medical002" element={<Medical002 />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/ecommerce002" element={<ECommerce002 />} />
        <Route path="/blogalt1" element={<Blogalt1 />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/travel1" element={<Travel1 />} />
        <Route path="/realestate" element={<RealEstate />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/restaurant002" element={<Restaurant002 />} />
        <Route path="/restaurant001" element={<Restaurant001 />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/business002" element={<Business002 />} />
        <Route path="/heroimage" element={<HeroImage />} />
        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/contact3" element={<Contact3 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/home2" element={<Home2 />} />
        <Route path="/carreservation" element={<CarReservation />} />
        <Route path="/contactsimple" element={<ContactSimple />} />
        <Route path="/loginregister" element={<LoginRegister />} />
        <Route path="/contactus6" element={<ContactUs6 />} />
        <Route path="/digtalagency" element={<DigtalAgency />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/desktophd" element={<DesktopHD />} />
        <Route path="/home3" element={<Home3 />} />
        <Route path="/blogdetail4" element={<BlogDetail4 />} />
        <Route path="/blogdetail5" element={<BlogDetail5 />} />
        <Route path="/blogdetail6" element={<BlogDetail6 />} />
        <Route path="/blogdetail7" element={<BlogDetail7 />} />
        <Route path="/artboard" element={<Artboard />} />
        <Route path="/artboard1" element={<Artboard1 />} />
        <Route path="/artboard2" element={<Artboard2 />} />
        <Route path="/artboard3" element={<Artboard3 />} />
        <Route path="/invoicedetailweb" element={<InvoiceDetailWeb />} />
        <Route path="/landingpage1" element={<LandingPage1 />} />
        <Route path="/propertypage" element={<PropertyPage />} />
        <Route path="/propertydetail" element={<PropertyDetail />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/propertydetail1" element={<PropertyDetail1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
