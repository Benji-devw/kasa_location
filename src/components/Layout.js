import React from "react";
import Header from "./header/header";


const Layout = ({ children }) => {
  return (
    <>
      {/* <head></head> */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
export default Layout;
