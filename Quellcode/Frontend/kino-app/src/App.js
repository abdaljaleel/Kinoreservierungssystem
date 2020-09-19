import React, { useState } from 'react';
// Nötig für Bootstrap, macht noch CSS Probleme
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.less';
import PosterTable from './PosterTable/PosterTable';
import MainModal from './MainModal/MainModal';
import MainNavigation from './navbar Components/Navigation/MainNavigation';
import MainFooter from './footer Component/footer/MainFooter';
function App() {
  const [selectedMovieId, setSelectedMovieId] = useState(-1);

  return (
    <div className="App">
      <canvas id="titleCanvas"></canvas>

      <React.Fragment>     
      <MainNavigation/>
      </React.Fragment>

      { selectedMovieId !== -1 && <MainModal id="mainModal" setSelectedMovieId={setSelectedMovieId} movieId={selectedMovieId}></MainModal>}

      <PosterTable id="posterTable" setSelectedMovieId={setSelectedMovieId}></PosterTable>

      <MainFooter/>

    
    </div>
    
  );
  
}

export default App;
