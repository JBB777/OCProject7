import '../styles/Banner/Banner.css';

function Banner({ imgBanner, title }) {
  return (
    <div className="banner">
      <div className="banner__opacity"></div>
      <img
        className="banner__img"
        src={imgBanner}
        alt="Photo en arrière plan de la banière."
      />
      <div className="banner__text">
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Banner;
