import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logoHeader.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de l'agence Kasa" className="header__logo" />
      <nav className="header__navbar__mobile">
        <Link to="/">ACCUEIL</Link>
        <Link to="/apropos">A PROPOS</Link>
      </nav>
      <nav className="header__navbar__desktop">
        <Link to="/">Accueil</Link>
        <Link to="/apropos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
