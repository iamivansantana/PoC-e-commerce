import React from 'react';
import Catalogue from './components/catalogue/Catalogue';
import CoverPage from './components/coverPage/CoverPage';
import FilteringFixed from './components/filtering/FilteringFixed';
import NavBar from './components/NavBar/NavBar';

const App = () => {


  return (
    <>
        <FilteringFixed />
          <NavBar />
          <div className="containerProject">
            <CoverPage />
            <Catalogue />
          </div>
    </>
  )
}

export default App;
