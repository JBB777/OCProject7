import './Banner.scss';

function Banner(props) {
  /* Fct to fix the opacity on the banner depending on the page */
  function bannerOpacity() {
    if (props.title === '') {
      return <div className="banner__opacity banner__opacity-about"></div>;
    } else {
      return <div className="banner__opacity"></div>;
    }
  }

  return (
    <div className="banner">
      {bannerOpacity()}
      <img
        className="banner__img"
        src={props.imgBanner}
        alt="Photo en arrière plan de la banière."
      />
      <div className="banner__text">
        <p>{props.title}</p>
      </div>
    </div>
  );
}

export default Banner;
