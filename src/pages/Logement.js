import '../styles/Logement/Logement.css';
import Carrousel from '../components/Carrousel';
import logements from '../datas/logements.json';
import { useParams } from 'react-router-dom';

function Logement() {
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);
  return (
    <>
      <main>
        <Carrousel slides={logement.pictures} />
      </main>
    </>
  );
}

export default Logement;
