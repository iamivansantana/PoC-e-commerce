import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ArticlesState from './context/articlesContext/articlesState';

const App = () => {
  return (
    <>
        <ArticlesState>
          <NavBar />
          <div className="containerProject">
            <h1>Starting1</h1>
            <h1>Starting2</h1>
            <h1>Starting3</h1>
          </div>
        </ArticlesState>
    </>
  )
}

export default App;
