import '../styles/Home.scss';
import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <Banner title={"Chez vous, partout et ailleurs"} />
      </div>
    </Layout>
  );
}

export default Home;
