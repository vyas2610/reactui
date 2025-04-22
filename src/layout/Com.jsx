import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Com = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Com;
