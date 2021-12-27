import 'bootstrap/dist/css/bootstrap.min.css';
import './CadastroEventos.css';
import React, {useState} from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Evento from './ModelosEventos';

export default function Eventos(props) {
  let { nome } = useParams();
  const [evento, setEvento] = useState(nome ? props.eventos.filter((value) => value.nome === nome)[0] ?? new Evento({}): new Evento({}));
  const history = useNavigate();

  function handleInputChange(e) {
    setEvento(new Evento({...evento, [e.target.name]: e.target.value}));
  }

  function handleSubmit(event){
    event.preventDefault();
    let eventos = props.eventos.filter((value) => value.nome !== nome);
    eventos.push(evento)
    props.setEventos([...eventos])
    history.push('/eventos');
  }
  

  return (
  <>
  <form onSubmit={handleSubmit} >  
    <div className='novoEvento'>
       <h2 class="titulo-centralizado">Novo Evento</h2>
    </div>

<div class="card">
  <div class="card-body">
    <div class="custom-file">
      {/* <input type="file" class="custom-file-input"/> */}
    </div>

    <div class="mb-3">
      <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nome do Evento:</label>
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Insira aqui o nome do evento" name="nome" value={evento.nome} onChange={handleInputChange}/>
      </div>


      <div class="mb-3">
        <label for="inicioevento" class="form-label">Início:</label>
        <input type="text" class="form-control" id="inicioevento" placeholder="dd-mm-yyyy" name="inicioevento" value={evento.inicioevento} onChange={handleInputChange}/>
      </div>
      <div class="mb-3">
        <label for="fimevento" class="form-label">Término:</label>
        <input type="text" class="form-control" id="fimevento" placeholder="dd-mm-yyyy" name="fimevento" value={evento.fimevento} onChange={handleInputChange}/>
      </div>

      <button type="submit" class="btn btn-outline-dark" i>Criar</button>


  </div>
</div>
</form>
    
      </>
  )
}

