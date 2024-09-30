import '../styles/Logement/Details.css';
import Tag from './Tag';
import Host from './Host';
import Rating from './Rating';

function Details({ title, location, tabTags, nbStars, host }) {
  return (
    <div className="details">
      <div className="details__title-container">
        <h1>{title}</h1>
        <p>{location}</p>
        <div className="details__tags">
          {tabTags.map((tag) => {
            return <Tag tagName={tag} />;
          })}
        </div>
      </div>
      <div>
        <Host props={host} />
        <Rating nbStars={nbStars} />
      </div>
    </div>
  );
}

export default Details;
