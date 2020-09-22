import React, { useState } from 'react';
// Nötig für Bootstrap, macht noch CSS Probleme
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.less';
import PosterTable from './PosterTable/PosterTable';
import MainModal from './MainModal/MainModal';
import MainNavigation from './navbar Components/Navigation/MainNavigation';
import MainFooter from './footer Component/footer/MainFooter';

const windows = ["home", "contact", "imprint", "faq"];

function App() {
  const [currentWindow, setCurrentWindow] = useState(1);
  const [selectedMovieId, setSelectedMovieId] = useState(-1);

  return (
    <div className="App">

      <div className="cinema-title">Kino XY</div>

      <React.Fragment>
        <MainNavigation setCurrentWindow={setCurrentWindow} />
      </React.Fragment>

      <div className="app-content">

        {
          (currentWindow === 0 && "home")
          || (currentWindow === 1 && "contact")
          || (currentWindow === 2 && "imprint")
          || (currentWindow === 3 && "faq")
        }

        {(selectedMovieId !== -1) && <MainModal id="mainModal" setSelectedMovieId={setSelectedMovieId} movieId={selectedMovieId}></MainModal>}
        <PosterTable id="posterTable" setSelectedMovieId={setSelectedMovieId}></PosterTable>

      </div>

      <MainFooter />

    </div>
  );

}

export default App;
