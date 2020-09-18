import React, { useState } from 'react';
// Nötig für Bootstrap, macht noch CSS Probleme
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.less';
import PosterTable from './PosterTable/PosterTable';
import MainModal from './MainModal/MainModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <canvas id="titleCanvas"></canvas>

      <center><header className="mainheader">
        <nav><ul>
          <li> <a href="#">ABOUT</a> </li>
          <li> <a href="#">ÜBER</a> </li>
          <li> <a href="#">ANSCHRIFT</a> </li>
          <li> <a href="#">IMPRESSUM</a> </li>
        </ul></nav>
      </header></center>

      { showModal && <MainModal id="mainModal" modalListener={setShowModal}></MainModal>}

      <PosterTable id="posterTable" modalListener={setShowModal}></PosterTable>

      <footer>
        copy right
      </footer>
    </div>
  );
}



export default App;
