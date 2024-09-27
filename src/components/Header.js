import { Link } from 'react-router-dom';
import '../styles/Header/Header.css';
import logo from '../assets/logoHeader.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de l'agence Kasa" className="header__logo" />
      <nav className="header__navbar__mobile">
        <Link to="/home">ACCUEIL</Link>
        <Link to="/apropos">A PROPOS</Link>
      </nav>
      <nav className="header__navbar__desktop">
        <Link to="/home">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
