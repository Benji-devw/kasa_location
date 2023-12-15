import "./header.scss";
import MenuList from "./menuList";
import logo from "../../assets/Logo_kasa.svg";
// import { Link } from "react-router-dom";

const Header = () => {
  const list = [
    { url: "/", link: "Accueil" },
    { url: "/about", link: "À propos" },
  ];

  //FIXME: Link hide image
  return (
    <div className="header">
      {/* <Link to={list[0]} className="header__logo"> */}
      <img src={logo} alt="logo" />
      {/* </Link> */}
      <nav className="nav-link">
        <MenuList props={list} />
      </nav>
    </div>
  );
};

export default Header;
