import '../styles/Dropdown/Dropdown.css';
import React, { useState } from 'react';

function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown__title-container">
        <span className="dropdown__title">{props.title}</span>
        <span onClick={toggleIcon}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>
      {isOpen && <div className="dropdown__content">{props.content}</div>}
    </div>
  );
}

export default Dropdown;
