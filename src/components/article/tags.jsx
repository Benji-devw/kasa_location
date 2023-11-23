const Tags = ({ tags }) => (
  <div className="article__tags__items">
    {tags.map((tag) => (
      <span key={tag} className="tag__item">
        {tag}
      </span>
    ))}
  </div>
);

export default Tags;