import React from 'react';
import Catalogue from './components/catalogue/Catalogue';
import CoverPage from './components/coverPage/CoverPage';
import NavBar from './components/NavBar/NavBar';
import ArticlesState from './context/articlesContext/articlesState';

const App = () => {
  return (
    <>
        <ArticlesState>
          <NavBar />
          <div className="containerProject">
            <CoverPage />
            <Catalogue />
          </div>
        </ArticlesState>
    </>
  )
}

export default App;
