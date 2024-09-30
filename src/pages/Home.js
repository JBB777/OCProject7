import Banner from '../components/Banner';
import Gallery from '../components/Gallery';
import img from '../assets/imgBannerHome.jpg';

function Home() {
  return (
    <>
      <main>
        <Banner imgBanner={img} title="Chez vous, partout et ailleurs" />
        <Gallery />
      </main>
    </>
  );
}

export default Home;
