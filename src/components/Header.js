import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="logo de l'agence Kasa" />
    </header>
  );
}

export default Header;
