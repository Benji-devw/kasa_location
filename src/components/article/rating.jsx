const Rating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<i key={i} className="fa fa-star" />);
    } else {
      stars.push(<i key={i} className="fa fa-star fa-none" />);
    }
  }
  return <div className="rating">{stars}</div>;
};

export default Rating;