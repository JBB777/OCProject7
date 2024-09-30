import '../styles/Logement/Logement.css';
import Carrousel from '../components/Carrousel';
import Details from '../components/Details';
import Dropdown from '../components/Dropdown';
import logements from '../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  console.log(logement.rating);
  return (
    <>
      <main>
        <Carrousel slides={logement.pictures} />
        <Details
          title={logement.title}
          location={logement.location}
          tabTags={logement.tags}
          nbStars={logement.rating}
          host={logement.host}
        />
        <div>
          <Dropdown title="équipements" content={logement.equipments} />
          <Dropdown title="description" content={logement.description} />
        </div>
      </main>
    </>
  );
}

export default Logement;
