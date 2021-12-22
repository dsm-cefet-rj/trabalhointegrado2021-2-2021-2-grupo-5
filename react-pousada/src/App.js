import logo from './logo.svg';
import Home from './components/Home/Home';
import Cadastro from './components/Cadastro/Cadastro';
import Pagamento from './components/Pagamento/Pagamento';
//import Eventos from './pages/Eventos'
//import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom' ;

function App() {
  return (
  <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/cadastro" element={<Cadastro/>}/>
            <Route exact path="/pagamemto" element={<Pagamento/>}/>
          </Routes>
      </Router>
  
  
  );
}

export default App;
//<Route exact path="/eventos" element={<Eventos/>}/>
