import React from 'react';
import { Link } from 'react-router-dom';

function Card({props}) {
  // console.log(props);
  return (
    <Link to={`/article/${props.id}`} className='card-link'>
    <div className="card">
      <img src={props.cover} alt={props.title} />
      <div className="card-body">
        <h3 className='card__title'>{props.title}</h3>
      </div>
    </div>
    </Link>
  );
}

export default Card;
