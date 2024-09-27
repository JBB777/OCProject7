import Banner from '../components/Banner';
import img from '../assets/imgBannerHome.jpg';

function Home() {
  return (
    <>
      <main>
        <Banner imgBanner={img} title="Chez vous, partout et ailleurs" />
      </main>
    </>
  );
}

export default Home;
