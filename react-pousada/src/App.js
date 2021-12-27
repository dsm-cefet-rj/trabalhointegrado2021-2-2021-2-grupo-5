import logo from './logo.svg';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Pagamento from './components/Pagamento/Pagamento';
import Reserva from './components/Reserva/Reserva';
//import Eventos from './pages/Eventos'
//import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom' ;
import Eventos from './components/CadastroEventos/CadastroEventos';
import Evento from './components/CadastroEventos/ModelosEventos';
import { useState } from 'react';

function App() {

  const [eventos, setEventos] = useState([

  ]
    );

  return (
  <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cadastro" element={<Cadastro/>}/>
            <Route exact path="/pagamento" element={<Pagamento/>}/>
            <Route exact path="/reserva" element={<Reserva/>}/>
            {/* <Route exact path="/eventos" element={<Eventos/>}/> */}
            <Route exact path="/eventos" component={() => <Eventos eventos={eventos} setProjetos={setEventos} />}></Route>
          </Routes>
      </Router>
  
  
  );
}

export default App;
//<Route exact path="/eventos" element={<Eventos/>}/>
