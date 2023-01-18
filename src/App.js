import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './components/Logement'
import Banner from './components/Banner'
import Apropos from './components/Apropos'
import Footnote from './components/Footnote'
import Acceuil from './components/Acceuil';
import Erreur from './components/Erreur';
import jsonLogements from './utils/logements.json';

const App = function (props) {
  const [logements, setLogements] = useState(jsonLogements)
  return (
    <div>
      <Router>
        <Banner />
        <Routes>
          <Route exact path="/" element={<Acceuil logements={logements} />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/logement/:LogId" element={<Logement logements={logements} />}></Route>
          <Route path="*" element={<Erreur />}></Route>
        </Routes>
      </Router>
      <Footnote />
    </div>
  );

}

export default App;