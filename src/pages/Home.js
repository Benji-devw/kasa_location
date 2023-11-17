import '../styles/Home.scss';
import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";
import Gallery from "../components/home/gallery";

const Home = (props) => {
  return (
    <Layout>
      <div className="home">
        <Banner title={"Chez vous, partout et ailleurs"} />
        <Gallery props={props}/>
      </div>
    </Layout>
  );
}

export default Home;
