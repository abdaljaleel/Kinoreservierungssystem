import React, { useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles.less';
import { PosterTable } from './PosterTable/PosterTable';
import { MainModal } from './MainModal/MainModal';

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

      { showModal && <MainModal id="mainModal"></MainModal> }

      <PosterTable id="posterTable" posterClickListener={e => setShowModal()}></PosterTable>

      <button onClick={e => setShowModal(true)}>Open Modal</button>

      <footer>
        copy right
      </footer>
    </div>
  );
}






export default App;
