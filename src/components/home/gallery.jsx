import "../../styles/gallery.scss";
import { fetchLogements } from "../../api/api";
import { useEffect, useState } from "react";
import Card from "./card";

const Gallery = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchLogements();
        setHousings(response);
      } catch (error) {
        alert("Erreur lors de la récupération des données");
        console.error("Erreur lors de la récupération des données", error);
      }
    };
    getData();
  }, []);

  return (
    <div className="gallery">
      <div className="gallery__container">
        <div className="gallery__container__item">
          {housings.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
