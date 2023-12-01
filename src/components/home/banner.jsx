import "./banner.scss";

const Banner = ({image, children}) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner__content">
        <div className="banner__filter"></div>
        {children}
      </div>
    </div>
  );
};
export default Banner;