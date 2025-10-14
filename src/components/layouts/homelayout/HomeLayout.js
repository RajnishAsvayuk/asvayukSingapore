import React, { Children } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
