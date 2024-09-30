import React from 'react';

function Host(props) {
  return (
    <div className="host-container">
      <img
        className="host__img"
        src={props.host.picture}
        alt="Photo du propriétaire"
      />
      <p className="host__title">{props.host.name}</p>
    </div>
  );
}

export default Host;
