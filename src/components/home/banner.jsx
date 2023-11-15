import "./banner.scss";

const Banner = ({title}) => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__filter"></div>
        <h1 className="banner__title">{title}</h1>
      </div>
    </div>
  );
};
export default Banner;