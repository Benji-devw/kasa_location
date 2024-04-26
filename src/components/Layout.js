import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

//TODO: add head
const Layout = ({ children, page }) => {
  return (
    <React.Fragment>
      <head>
        <title>Kasa - {page}</title>
        <meta
          name="Kasa"
          content="Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant"
        />
      </head>
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default Layout;
