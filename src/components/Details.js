import '../styles/Logement/Details.css';
import Tag from './Tag';

function Details(props) {
  return (
    <div className="details">
      <h1>{props.title}</h1>
      <p>{props.location}</p>
      <div className="details__tags">
        {props.tabTags.map((tag) => {
          return <Tag tagName={tag} />;
        })}
      </div>
    </div>
  );
}

export default Details;
