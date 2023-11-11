import React from "react";
// import Head from "react-helmet";
import Header from "./header/header";

const Layout =({children, page}) =>{
  return(
      <>
        {/* <Head>
          <title>{page}</title>
          <meta name="description" content="Text" />
          <link rel="icon" href="/StouflyDoc_Logo.svg" />
        </Head> */}
      
        <Header/>
        <main>{children}</main>
        {/* <footer> */}
      </>
  )
}

export default Layout;