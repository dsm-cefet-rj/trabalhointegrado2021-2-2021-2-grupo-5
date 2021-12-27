import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CadastroEventos.css';



export default function Eventos () {

  return (
  <>
       
    <div className='novoEvento'>
       <h2 class="titulo-centralizado">Novo Evento</h2>
    </div>

<div class="card">
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
</div>
    
    
      </>
  )
}

