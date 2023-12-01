import "../styles/Home.scss";
import React from "react";
import Img from "../assets/Image_source_1.png";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";
import Gallery from "../components/home/gallery";

const Home = () => {
  return (
    <Layout>
      <section className="home">
        <Banner image={Img}>
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </Banner>
        <Gallery />
      </section>
    </Layout>
  );
};

export default Home;
