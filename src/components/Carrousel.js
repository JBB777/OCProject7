import '../styles/Carrousel/Carrousel.css';

function Carrousel({ slides }) {
  const length = slides.lenght;
  return (
    <div>
      <img /*src={source} alt={alt}*/ />
      <i class="fa-solid fa-chevron-left"></i>
      <i class="fa-solid fa-chevron-right"></i>
    </div>
  );
}

export default Carrousel;
