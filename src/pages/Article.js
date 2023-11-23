import "../styles/article.scss";
import React, { useEffect, useState } from "react";
import FetchData from "../api/api";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Carrousels from "../components/article/carrousel";
import Rating from "../components/article/rating";
import Tags from "../components/article/tags";
import Dropdown from "../components/article/dropdown";

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [housing, setHousing] = useState(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await FetchData(id);
        if (response === undefined) {
          navigate("/logement-non-trouve");
        } else {
          setHousing(response);
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
    <Layout>
      <section>
        {!housing ? (
          <div>Loading...</div>
        ) : (
          <article>
            <Carrousels title={housing.title} pictures={housing.pictures} />

            <div className="article__content">
              <div className="article__content__title">
                <h1>{housing.title}</h1>
                <p>{housing.location}</p>
                {/* <span>{data.tags}</span> */}
              </div>
              <div className="article__content__author">
                <div className="article__content__author__avatar">
                  <p>{housing.host.name}</p>
                  <img src={housing.host.picture} alt={housing.host.name} />
                </div>
                <div className="article__content__author__rating">
                  <Rating rating={housing.rating} />
                </div>
              </div>
            </div>

            <div className="article__tags">
              <Tags tags={housing.tags} />
            </div>

            <div className="article__details">
              <div className="article__details__description">
                <Dropdown title="Description" datas={housing.description} />
              </div>
              <div className="article__details__equipments">
                <Dropdown title="Équipements" datas={housing.equipments} />
              </div>
            </div>
          </article>
        )}
      </section>
    </Layout>
  );
};

export default Article;
