import './header.css';
import logo from '../../assets/Logo_kasa.svg';


const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="logo" />
      <h1>Header</h1>
    </div>
  );
}

export default Header;