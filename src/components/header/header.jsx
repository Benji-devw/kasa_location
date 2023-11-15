import './header.scss';
import MenuList from './menuList'; 
import logo from '../../assets/Logo_kasa.svg';


const Header = () => {
  const list = [
    { url: "/", link: "Accueil" },
    { url: "/about", link: "À propos" },
  ];

  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <nav className='nav-link'>
        <MenuList props={list} />
      </nav>
    </div>
  );
}

export default Header;