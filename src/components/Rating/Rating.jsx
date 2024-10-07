import starEmpty from '../../assets/starEmpty.svg';
import starFully from '../../assets/starFully.svg';
import './Rating.scss';

function Rating(props) {
  const nbStars = parseInt(props.rating);
  const starsTab = Array.of(0, 0, 0, 0, 0);

  function tabCons() {
    for (let i = 0; i < 5; i++) {
      if (i < nbStars) {
        starsTab[i] = 1;
      }
    }
  }

  tabCons();

  return (
    <div className="rating-container">
      {starsTab.map((value, index) =>
        value === 1 ? (
          <img key={index} src={starFully} alt="icône étoile pleine" />
        ) : (
          <img key={index} src={starEmpty} alt="icône étoile vide" />
        ),
      )}
    </div>
  );
}

export default Rating;
