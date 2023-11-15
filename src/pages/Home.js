import '../styles/Home.scss';
import React from "react";
import Layout from "../components/Layout";


const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h1>Bienvenue sur la page d'accueil</h1>
        <p>Ce contenu est spécifique à la page d'accueil.</p>
      </div>
    </Layout>
  );
}

export default Home;
