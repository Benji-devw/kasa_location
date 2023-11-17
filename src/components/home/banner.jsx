import "./banner.scss";

const Banner = ({image, children}) => {
  return (
    <div className="banner">
      {/* <img src={image} alt="banner" /> */}
      <div className="banner__content">
        <div className="banner__filter"></div>
        {children}
      </div>
    </div>
  );
};
export default Banner;