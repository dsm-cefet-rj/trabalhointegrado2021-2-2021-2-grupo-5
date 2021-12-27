import React, { useState } from 'react'
import './styled.scss'

export default function CadastrarEvento(props) { 
  const [activity, setActivity] = useState({});

  function handleInputChange(e) {
    setActivity({...activity, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.activities);
    props.setActivities(props.activities.concat(activity));
  }

  return ( 
    <>
       
    <div className='novoEvento'>
       <h2 class="titulo-centralizado">Novo Evento</h2>
    </div>

<form onSubmit={handleSubmit} >
  <div class="card-body">
    <div class="custom-file">
      <input type="file" class="custom-file-input"/>
    </div>

    <div class="mb-3">
      <label for="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Nome do Evento:</label>
        <input type="text" class="form-control form-control-sm" id="colFormLabelSm"
          placeholder="Insira aqui o nome do evento"/>
      </div>


      <div class="mb-3">
        <label for="inicioevento" class="form-label">Início:</label>
        <input type="date" class="form-control" id="inicioevento" placeholder="dd-mm-yyyy"/>
      </div>
      <div class="mb-3">
        <label for="fimevento" class="form-label">Término:</label>
        <input type="date" class="form-control" id="fimevento" placeholder="dd-mm-yyyy"/>
      </div>

      <button type="button" class="btn btn-outline-dark" i>Criar</button>


    </div>
  </form>
    
    
      </>
  );
}