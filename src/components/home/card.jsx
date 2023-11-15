import React from 'react';

function Card({props}) {
  // console.log(props);
  return (
    <div className="card">
      <img src={props.cover} alt={props.title} />
      <div className="card-body">
        <h3 className='card__title'>{props.title}</h3>
        {/* <p>{props.description}</p> */}
      </div>
    </div>
  );
}

export default Card;
