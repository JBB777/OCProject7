import '../styles/Header.css';
import logo from '../assets/logoHeader.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de l'agence Kasa" className="header__logo" />
      <nav className="header__navbar__mobile">
        <span>ACCUEIL</span>
        <span>A PROPOS</span>
      </nav>
      <nav className="header__navbar__desktop">
        <span>Accueil</span>
        <span>A Propos</span>
      </nav>
    </header>
  );
}

export default Header;
