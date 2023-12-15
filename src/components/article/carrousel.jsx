import "../../styles/carrousel.scss";
import { useState } from "react";

const Carrousels = ({ title, pictures }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex(() => (currentImage + 1) % pictures.length);
    setTimeout(() => {
      setCurrentImage(() => (currentImage + 1) % pictures.length);
    }, 300);
  };
  const prevImage = () => {
    setIndex(() =>
      currentImage === 0 ? pictures.length - 1 : currentImage - 1
    );
    setTimeout(() => {
      setCurrentImage(() =>
        currentImage === 0 ? pictures.length - 1 : currentImage - 1
      );
    }, 300);
  };

  return (
    <div className="article__carrousel">
      <span
        tabIndex={0}
        className="article__carrousel__arrow prev"
        onClick={prevImage}
        onKeyDown={(event) => {
          event.key === "Enter" && prevImage();
        }}
      >
        &#10094;
      </span>
      <img
        className={index === currentImage ? "visible" : "hidden"}
        src={pictures[currentImage]}
        alt={title}
      />
      <span className="article__carrousel__counter">
        {index + 1}/{pictures.length}
      </span>
      <span
        tabIndex={0}
        className="article__carrousel__arrow next"
        onClick={nextImage}
        onKeyDown={(event) => {
          event.key === "Enter" && nextImage();
        }}
      >
        &#10095;
      </span>
    </div>
  );
};

export default Carrousels;
