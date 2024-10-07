import './About.scss';
import renseignements from '../../datas/about.json';
import img from '../../assets/imgBannerAbout.jpg';
import Banner from '../../components/Banner/Banner';
import Dropdown from '../../components/Dropdown/Dropdown';

function About() {
  return (
    <>
      <main>
        <Banner imgBanner={img} title="" />
        <div className="about__dropdown">
          {renseignements.map((categorie) => {
            return (
              <Dropdown
                key={categorie.title}
                title={categorie.title}
                content={categorie.content}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default About;
