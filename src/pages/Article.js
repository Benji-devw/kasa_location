import "../styles/article.scss";
import React, { useEffect, useState } from "react";
import { fetchLogements } from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Carrousels from "../components/article/carrousel";
import Rating from "../components/article/rating";
import Tags from "../components/article/tags";
import Dropdown from "../components/article/dropdown";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logements, setLogements] = useState(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await fetchLogements(id);
        if (response === undefined) {
          navigate("/logement-non-trouve");
        } else {
          setLogements(response);
        }
      } catch (error) {
        alert("Erreur lors de la récupération des données de l'article");
        console.error(
          "Erreur lors de la récupération des données de l'article:",
          error
        );
      }
    };

    fetchDataById();
  }, [id, navigate]);

  return (
    <Layout page={"Logement"}>
      <section>
        {!logements ? (
          <div>Loading...</div>
        ) : (
          <article className="logement">
            <Carrousels title={logements.title} pictures={logements.pictures} />

            <div className="article__content">
              <div className="article__content__title">
                <h1>{logements.title}</h1>
                <p>{logements.location}</p>
                {/* <span>{data.tags}</span> */}
              </div>
              <div className="article__content__author">
                <div className="article__content__author__avatar">
                  <p>{logements.host.name}</p>
                  <img src={logements.host.picture} alt={logements.host.name} />
                </div>
                <div className="article__content__author__rating">
                  <Rating rating={logements.rating} />
                </div>
              </div>
            </div>

            <div className="article__tags">
              <Tags tags={logements.tags} />
            </div>

            <div className="article__details">
              <div className="dropdowns">
                <Dropdown title="Description" datas={logements.description} />
                <Dropdown title="Équipements" datas={logements.equipments} />
              </div>
            </div>
          </article>
        )}
      </section>
    </Layout>
  );
};

export default Article;
