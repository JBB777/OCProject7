import React from 'react';
import './Host.scss';

function Host(props) {
  return (
    <div className="host">
      <span className="host__name">{props.host.name}</span>
      <img
        className="host__img"
        src={props.host.picture}
        alt="Photo du propriétaire"
      />
    </div>
  );
}

export default Host;
