import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
//import Eventos from './pages/Eventos'
//import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom' ;
import FormEvento from './eventos/FormEvento';
import TabelaEvento from './eventos/TabelaEventos';


function App() {
  return (
  <Router>
          <Switch>
            <Route exact path="/" ><Home/></Route>
            <Route exact path="/eventos"><FormEvento/></Route>
            <Route exact path="/tabelaeventos"><TabelaEvento/></Route>
          </Switch>
      </Router>
  
  
  );
}

export default App;
//<Route exact path="/eventos" element={<Eventos/>}/>
