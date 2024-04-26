import React from "react";
import { Link } from "react-router-dom";

function Card({ id, title, cover }) {
  return (
    <Link to={`/article/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} />
        <div className="card-body">
          <h3 className="card__title">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
