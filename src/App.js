import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logement from './components/Logement'
import Banner from './components/Banner'
import Apropos from './components/Apropos'
import Footnote from './components/Footnote'
import Acceuil from './components/Acceuil';
import Erreur from './components/Erreur';

function App() {
  return (
    <div>
      <Router>
      <Banner />
        <Routes>
          {/* <Route path="/" exact component={Logement} />
          <Route path="/apropos" component={Apropos} /> */}
          <Route exact path="/" element={<Acceuil />}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="*" element={<Erreur />}></Route>
          {/* <Route  path="/apropos" element={<Apropos />}></Route> */}
        </Routes>
      </Router>
      <Footnote/>
    </div>
  );
}

export default App;
