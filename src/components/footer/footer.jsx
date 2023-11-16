import './footer.scss';
import logo from '../../assets/Logo_kasa.svg';

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" />
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
}

export default Footer;