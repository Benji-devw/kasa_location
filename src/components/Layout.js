import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children }) => {
  return (
    <div className="container">
      {/* <head></head> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
