import './App.css';
// import React from 'react';
import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Logement from './components/Logement'
import Banner from './components/Banner'
import Apropos from './components/Apropos'
import Footnote from './components/Footnote'
import Acceuil from './components/Acceuil';
import Erreur from './components/Erreur';
import jsonLogements from './utils/logements.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // results: []
      results: jsonLogements
    }
    // this.getAPIData();
  } 

  render(){
    // {this.getAPIData()}
  return (
    <div>
      <Router>
      <Banner />
        <Routes>
          {/* <Route path="/" exact  component={Logement} />
          <Route path="/apropos" component={Apropos} /> */}
          {/* <Route exact path="/" element={<Acceuil />}></Route> */}
          <Route exact path="/" element={<Acceuil>{this.state.results}</Acceuil>}></Route>
          <Route path="/apropos" element={<Apropos />}></Route>
          <Route path="/logement" element={<Logement />}></Route>
          <Route path="*" element={<Erreur />}></Route>
          {/* <Route  path="/apropos" element={<Apropos />}></Route> */}
        </Routes>
      </Router>
      <Footnote/>
    </div>
  );
  }
}

export default App;

















// const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=T2ss2rJo03iD7F6vVeY9nXf9rQGoozYe"

// function App() {

//   useEffect(()=> {
//     // fetch(jsonLogements)
//     // fetch(url)
//     let monUrl = "./utils/logements.json";
//     fetch(monUrl)
//     .then(reponse => reponse.json())
//     .catch(() => { alert('une erreur est survenue dans le chargement des données des photographes!!') })
//     .then(data => {
//       console.log(data);
//     })
//     .catch(() => { alert('une erreur est survenue dans le chargement des données des photographes!!') })
//   },[])

//   console.log(jsonLogements);

//   return (
//     <div>
//       <Router>
//       <Banner />
//         <Routes>
//           {/* <Route path="/" exact component={Logement} />
//           <Route path="/apropos" component={Apropos} /> */}
//           <Route exact path="/" element={<Acceuil />}></Route>
//           <Route path="/apropos" element={<Apropos />}></Route>
//           <Route path="*" element={<Erreur />}></Route>
//           {/* <Route  path="/apropos" element={<Apropos />}></Route> */}
//         </Routes>
//       </Router>
//       <Footnote/>
//     </div>
//   );
// }

// export default App;
