import '../styles/Logement/Logement.css';
import Carrousel from '../components/Carrousel';
import Details from '../components/Details';
import Host from '../components/Host';
import Rating from '../components/Rating';
import Dropdown from '../components/Dropdown';
import logements from '../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <>
      <main>
        <Carrousel pictures={logement.pictures} />
        <div className="logement__details">
          <Details
            title={logement.title}
            location={logement.location}
            tabTags={logement.tags}
          />
          <div>
            <Host host={logement.host} />
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="logement__dropdown">
          <Dropdown title="équipements" content={logement.equipments} />
          <Dropdown title="description" content={logement.description} />
        </div>
      </main>
    </>
  );
}

export default Logement;
