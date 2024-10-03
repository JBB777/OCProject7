import Banner from '../../components/Banner/Banner';
import Gallery from '../../components/Gallery/Gallery';
import img from '../../assets/imgBannerHome.jpg';

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
