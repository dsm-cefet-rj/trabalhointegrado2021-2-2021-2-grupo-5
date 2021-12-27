import React, {useState, useEffect} from 'react';
import { useParams, useHistory } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {addEvento, updateEvento} from './EventosSlice'

export default function FormEvento(props){

    const eventos = useSelector(state => state.eventos)
    const history = useHistory();
    const dispatch = useDispatch()
    let { id } = useParams();
    id = parseInt(id);

    const [evento, setEvento] = useState(
        id ? eventos.filter((p) => p.id === id)[0] ?? {} : {});

    const [actionType, ] = useState(
        id ? 
            eventos.filter((p) => p.id === id)[0] 
                ? 'eventos/updateEvento'
                : 'eventos/addEvento'
                : 'eventos/addEvento');

    function handleInputChange(e) {
        setEvento( {...evento, [e.target.name]: e.target.value} );
    }

    function handleSubmit(e){
        e.preventDefault();
        if(actionType === 'eventos/addEvento'){
            dispatch(addEvento(evento));
        }else{
            dispatch(updateEvento(evento));
        }
        
        history.push('/eventos');
    }
    
    useEffect(() =>  {document.title = 
            `Evento: ${evento.nome}`;
        return () => {document.title = 'Título'}
    } , [evento.nome]);


    return(<>
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
);
}