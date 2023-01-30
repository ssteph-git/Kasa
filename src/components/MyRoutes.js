import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from '../pages/Logement';
import Apropos from '../pages/Apropos';
import Accueil from '../pages/Accueil';
import Erreur from '../pages/Erreur';
import Banner from './Banner';
import Footnote from './Footnote';

const MyRoutes = function (props) {

  const [logements, setLogements] = useState([])
  useEffect(() => {
    fetch("/logements.json")
      .then(res => res.json())
      .then(logements => { setLogements(logements) })
  }, [])

  return (
    <>
      <Router>
        <Banner />
        <Routes>
          <Route exact path="/" element={<Accueil logements={logements} />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/logement/:LogId" element={<Logement logements={logements} />}></Route>
          <Route path="*" element={<Erreur />}></Route>
        </Routes>
      </Router>
      <Footnote />
    </>
  )

}

export default MyRoutes;