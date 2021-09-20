import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ArticlesState from './context/articlesContext/articlesState';

ReactDOM.render(
  <React.StrictMode>
    <ArticlesState>
      <App />
    </ArticlesState>
  </React.StrictMode>,
  document.getElementById('root')
);


