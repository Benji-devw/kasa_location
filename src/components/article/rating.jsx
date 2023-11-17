const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa-solid fa-star" />);
    } else {
      stars.push(<i key={i} className="fa-solid fa-star" />);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;