import '../styles/Thumb/Thumb.css';

function Thumb({ img, title }) {
  return (
    <div className="thumb">
      <img className="thumb__img" src={img} alt={title} />
      <span className="thumb__title">{title}</span>
    </div>
  );
}

export default Thumb;
