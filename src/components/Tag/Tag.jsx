import './Tag.scss';

function Tag(props) {
  return (
    <div className="tag">
      <span className="tag__name">{props.tagName}</span>
    </div>
  );
}

export default Tag;
