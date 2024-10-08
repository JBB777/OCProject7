import './Dropdown.scss';

function Dropdown(props) {
  /* Fct to open and close the dropdown */
  function toogleDropdown() {
    const id = props.title;
    document.getElementById(id).classList.toggle('dropdown__active');
  }

  /* Fct to display the equipments on list */
  function listingEquipments(content) {
    if (typeof content == 'object') {
      const listMots = content.map((mot) => <li key={mot}>{mot}</li>);
      return <ul>{listMots}</ul>;
    } else {
      return <p>{content}</p>;
    }
  }

  return (
    <div className="dropdown" id={props.title}>
      <div className="dropdown__title-container" onClick={toogleDropdown}>
        <span className="dropdown__title">{props.title}</span>
        <i className="fa-solid fa-chevron-down"></i>
      </div>
      <div className="dropdown__content">
        {listingEquipments(props.content)}
      </div>
    </div>
  );
}

export default Dropdown;
