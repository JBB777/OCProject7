import './Banner.scss';

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__opacity"></div>
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
