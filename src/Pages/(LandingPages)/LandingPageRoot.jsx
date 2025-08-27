import React from "react";
import { Outlet } from "react-router-dom";
import CardNav from "../../Components/Layouts/Navbar";
import logo from "/logo.svg";
import Footer from "../../Components/Layouts/Footer";
import BackToTop from "../../Components/BacktoTop";

const LandingPageRoot = () => {
  const items = [
    {
      label: "Home",
      bgColor: "rgb(7,30,31)",
      textColor: "#fff",
      links: [{ label: "Go Home", ariaLabel: "Home Page", to: "/" }],
    },
    {
      label: "Services",
      bgColor: "#112829",
      textColor: "#fff",
      links: [{ label: "Our Services", ariaLabel: "Services Page", to: "/services" }],
    },
    {
      label: "Contact",
      bgColor: "#001513",
      textColor: "#fff",
      links: [{ label: "Get in Touch", ariaLabel: "Contact Page", to: "/contact" }],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <CardNav
        logo={logo}
        logoAlt="Company Logo"
        items={items}
        baseColor="#fff"
        menuColor="#000"
        buttonBgColor="#111"
        buttonTextColor="#fff"
        ease="power3.out"
      />

      {/* Page content (child routes) */}
      <Outlet />

      {/* Back to top button */}
      <BackToTop />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPageRoot;
