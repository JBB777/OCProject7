import '../styles/Tag/Tag.css';

function Tag({ tagName }) {
  return (
    <div className="tag">
      <span className="tag__name">{tagName}</span>
    </div>
  );
}

export default Tag;
