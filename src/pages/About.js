import "../styles/About.scss";
import Layout from "../components/Layout";
import Banner from "../components/home/banner";
import Img from "../assets/kalen.png";
import { fetchAbouts } from "../api/api";
import Dropdown from "../components/article/dropdown";
import { useEffect, useState } from "react";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAbouts();
        setAbouts(data);
      } catch (error) {
        alert("Erreur lors de la récupération des données de l'article");
        console.error(
          "Erreur lors de la récupération des données de l'article:",
          error
        );
      }
    };

    fetchData();
  }, []);

  return (
    <Layout page={'About'}>
      <section>
        <article className="about">
          <Banner image={Img}></Banner>
          <div className="dropdowns">
            {abouts.map((about, id) => (
              <Dropdown
                key={id}
                title={about.title}
                datas={about.description}
              />
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
};
export default About;
