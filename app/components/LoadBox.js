import React from 'react';
import '../styles/Loading.css';

const LoadBox = (props) => {
  return (
    <div id="loader">
      <div id="box"></div>
      <div id="hill"></div>
    </div>
  );
}

export default LoadBox;