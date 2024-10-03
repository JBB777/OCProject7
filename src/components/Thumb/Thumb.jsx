import './Thumb.scss';

function Thumb(props) {
  return (
    <div className="thumb">
      <div className="thumb__opacity"></div>
      <img className="thumb__img" src={props.img} alt={props.title} />
      <span className="thumb__title">{props.title}</span>
    </div>
  );
}

export default Thumb;
