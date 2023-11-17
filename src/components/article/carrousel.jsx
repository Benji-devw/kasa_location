import { useState } from "react";


const Carrousels = ({props}) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
      setCurrentImage(() => (currentImage + 1) % props.pictures.length);
    };
    const prevImage = () => {
      setCurrentImage(() =>
      currentImage === 0 ? props.pictures.length - 1 : currentImage - 1
      );
    };

  return (
    <div className="article__carrousel">
      <span className="article__carrousel__arrow prev" onClick={prevImage}>&#10094;</span>
      {props.pictures.map((picture, index) => (
        <img
          key={index}
          src={picture}
          alt={props.title}
          className={index === currentImage ? 'visible' : 'hidden'}
        />
      ))}
      <span className="article__carrousel__arrow next" onClick={nextImage}>&#10095;</span>
    </div>
  );
};

export default Carrousels;