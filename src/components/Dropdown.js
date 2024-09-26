import '../styles/Dropdown.css';
import React, { useState } from 'react';

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIcon() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown__title-container">
        <span className="dropdown__title">{title}</span>
        <span onClick={toggleIcon}>
          {isOpen ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
        </span>
      </div>
      {isOpen && <div className="dropdown__content">{content}</div>}
    </div>
  );
}

export default Dropdown;
