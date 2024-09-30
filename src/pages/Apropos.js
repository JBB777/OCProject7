import '../styles/Apropos/Apropos.css';
import renseignements from '../datas/apropos.json';
import img from '../assets/imgBannerApropos.jpg';
import Banner from '../components/Banner';
import Dropdown from '../components/Dropdown';

function Apropos() {
  return (
    <>
      <Banner imgBanner={img} title="" />
      {renseignements.map((categorie) => {
        return <Dropdown title={categorie.title} content={categorie.content} />;
      })}
    </>
  );
}

export default Apropos;
