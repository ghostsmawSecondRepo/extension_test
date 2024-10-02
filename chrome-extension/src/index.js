import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Options from './Options'; // Import the Options component
import './index.css'; // Tailwind or other CSS

const isOptionsPage = window.location.pathname.includes('options.html'); 

const Root = isOptionsPage ? <Options /> : <App />; // Render the Options component if it's the options page

ReactDOM.render(
  <React.StrictMode>
    {Root}
  </React.StrictMode>,
  document.getElementById('root')
);
