import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/logoHeader.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de l'agence Kasa" className="header__logo" />
      <nav className="header__navbar">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
