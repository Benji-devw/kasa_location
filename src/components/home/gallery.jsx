import './gallery.scss';
import FetchData from '../../api/api';
import { useEffect, useState } from 'react';
import Card from './card';

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FetchData();
        setData(response);
      } catch (error) {
        console.error('Erreur lors de la récupération des données dans le composant Gallery :', error);
      }
    };
    getData();
  }, []);
  
  return (
    <div className='gallery'>
      <div className="gallery__container">
        <div className="gallery__container__item">
          {data.map((item) => (
            <Card key={item.id} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;