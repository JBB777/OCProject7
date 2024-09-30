import '../styles/Carrousel/Carrousel.css';
import { useState } from 'react';

function Carrousel({ slides }) {
  const length = slides.length;
  const [index, setIndex] = useState(0);

  function prevPicture() {
    setIndex(index === 0 ? length - 1 : index - 1);
    //if (index == 0) { setIndex = length - 1;} else {setIndex = index - 1;}
  }

  function nextPicture() {
    setIndex(index === length - 1 ? 0 : index + 1);
    //if (index == length - 1) { setIndex = 0;} else {setIndex = index + 1;}
  }

  return (
    <div className="carrousel">
      <img
        className="carrousel__img"
        src={slides[index]}
        alt={`Photo numéro ${index + 1} du carrousel`}
      />
      <i className="fa-solid fa-chevron-left" onClick={prevPicture}></i>
      <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
    </div>
  );
}

export default Carrousel;
