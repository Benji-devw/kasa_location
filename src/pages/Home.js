import "../styles/Home.scss";
import React from "react";
import Img from "../assets/Image_source_1.png";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";
import Gallery from "../components/home/gallery";

const Home = () => {
  return (
    <Layout page={"Home"}>
      <section>
        <article className="home">
        <Banner image={Img}>
          <h1 className="banner__title">Chez vous, partout et ailleurs</h1>
        </Banner>
        <Gallery />
        </article>
      </section>
    </Layout>
  );
};

export default Home;
