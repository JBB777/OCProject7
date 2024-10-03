import './Gallery.scss';
import ficheLogements from '../../datas/logements.json';
import Thumb from '../Thumb/Thumb';
import { Link } from 'react-router-dom';

function Gallery() {
  return (
    <div className="gallery">
      {ficheLogements.map((logement) => {
        return (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Thumb img={logement.cover} title={logement.title} />
          </Link>
        );
      })}
    </div>
  );
}

export default Gallery;
