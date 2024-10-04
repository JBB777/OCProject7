import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <>
      <main>
        <span className="error__txt error__404">404</span>
        <span className="error__txt error__subtitle">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" className="error__txt error__link">
          Retourner sur la page d’accueil
        </Link>
      </main>
    </>
  );
}

export default Error;
