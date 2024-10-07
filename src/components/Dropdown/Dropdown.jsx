import './Dropdown.scss';

function Dropdown(props) {
  function toogleDropdown() {
    const id = props.title;
    document.getElementById(id).classList.toggle('dropdown__active');
  }

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
        <i className="fa-solid fa-chevron-up fa-solid-inactive"></i>
      </div>
      <div className="dropdown__content">
        {listingEquipments(props.content)}
      </div>
    </div>
  );
}

export default Dropdown;
