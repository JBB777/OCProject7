import './Footer.scss';
import logo from '../../assets/logoFooter.svg';

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo de l'agence Kasa" className="footer__logo" />
      <p className="footer__credit">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
