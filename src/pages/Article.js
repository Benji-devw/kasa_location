import '../styles/article.scss';
import React, { useEffect, useState } from 'react';
import FetchData from '../api/api';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

const Article = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        const response = await FetchData(id);
        setData(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de l\'article:', error);
      }
    };

    fetchDataById();
  }, [id]);

  return (
    <Layout>
      <section>
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className='article'>
          <h1>{data.title}</h1>
          <p>{data.location}</p>
        </div>
      )}
      </section>
    </Layout>
  );
};

export default Article;
