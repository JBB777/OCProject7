import '../styles/Thumb/Thumb.css';

function Thumb(props) {
  return (
    <div className="thumb">
      <img className="thumb__img" src={props.img} alt={props.title} />
      <span className="thumb__title">{props.title}</span>
    </div>
  );
}

export default Thumb;
