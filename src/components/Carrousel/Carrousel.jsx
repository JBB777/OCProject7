import './Carrousel.scss';
import { useState } from 'react';

function Carrousel(props) {
  const length = props.pictures.length;
  const [index, setIndex] = useState(0);

  /* Fct to change picture when user click on an arrow */
  function prevPicture() {
    setIndex(index === 0 ? length - 1 : index - 1);
  }

  function nextPicture() {
    setIndex(index === length - 1 ? 0 : index + 1);
  }

  /* Fct to display the arrows only when there are more than 1 picture */
  function displayArrows() {
    if (length > 1) {
      return (
        <>
          <i className="fa-solid fa-chevron-left" onClick={prevPicture}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
        </>
      );
    }
  }

  return (
    <div className="carrousel">
      <img
        className="carrousel__img"
        src={props.pictures[index]}
        alt={`Photo numéro ${index + 1} du carrousel`}
      />
      {displayArrows()}
    </div>
  );
}

export default Carrousel;
