import React from 'react';
import './style.css';

function Loading(props) {
  if (props.loading) {
    return (
      <div className="Loading">
        <div className="Loading-spinner"></div>
        <p>Carregando</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Loading;
