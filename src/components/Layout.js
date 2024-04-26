import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from "./header/header";
import Footer from "./footer/footer";

//TODO: add head
const Layout = ({ children, page }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Kasa - {page}</title>
        <meta
          name="Kasa"
          content="Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant"
        />
      </Helmet>
      <div className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};
export default Layout;
