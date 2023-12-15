import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

//TODO: add head
const Layout = ({ children, page }) => {
  return (
    <div className="container">
      <head>
        <title>Kasa - {page}</title>
        <meta
          name="Kasa"
          content="Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant"
        />
      </head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
