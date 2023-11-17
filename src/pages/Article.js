import '../styles/article.scss';
import React, { useEffect, useState } from 'react';
import FetchData from '../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Carrousels from '../components/article/carrousel';
import Rating from '../components/article/rating';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [housing, setHousing] = useState(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await FetchData(id);
        if (response === undefined) {
          navigate('/logement-non-trouve');
        }
        else {
          setHousing(response);
        }
      } catch (error) {
        alert('Erreur lors de la récupération des données de l\'article')
        console.error('Erreur lors de la récupération des données de l\'article:', error);
      }
    };

    fetchDataById();
  }, [id]);

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
              <p>{housing.host.name}</p>
              <img src={housing.host.picture} alt={housing.host.name} />
              <div className="article__content__rating">
                <Rating rating={housing.rating} />
              </div>
            </div>
          </div>
        </article>
      )}
      </section>
    </Layout>
  );
};

export default Article;
