const Tags = ({ tags }) => (
  <div className="article__tags__items">
    {tags.map((tag, id) => (
      <span key={id} className="tag__item">
        {tag}
      </span>
    ))}
  </div>
);

export default Tags;