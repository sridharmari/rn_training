import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import WeatherApp from './weather';

ReactDOM.render(
  <App initCounter={3} />,
  document.getElementById('root'),
);
