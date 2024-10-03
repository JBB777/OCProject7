import './Logement.scss';
import Carrousel from '../../components/Carrousel/Carrousel';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Dropdown from '../../components/Dropdown/Dropdown';
import logements from '../../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <>
      <main>
        <Carrousel pictures={logement.pictures} />
        <div className="logement__infos">
          <div className="logement__title">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="logement__tags">
              {logement.tags.map((tag) => {
                return <Tag tagName={tag} key={tag} />;
              })}
            </div>
          </div>
          <div className="logement__host">
            <Rating rating={logement.rating} />
            <Host host={logement.host} />
          </div>
        </div>
        <div className="logement__dropdown">
          <Dropdown title="description" content={logement.description} />
          <Dropdown title="équipements" content={logement.equipments} />
        </div>
      </main>
    </>
  );
}

export default Logement;
