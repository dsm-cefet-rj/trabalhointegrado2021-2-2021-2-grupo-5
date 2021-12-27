import React from 'react';
import {Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {deleteEvento, fetchEventos} from './EventosSlice'

export default function ListagemEvento(props){
  
  const eventos = useSelector(state => state.eventos);
  const dispatch = useDispatch();

  function handleClickExcluirEvento(id){
        dispatch(deleteEvento(id));
  }
  
  
  return (
            <>
              <div id="lbl_titulo_pagina">Listagem de Eventos</div><br/>
              <Link to="/eventos/novo"><button id="Novo Evento" name="btn_novo_evento">Novo Evento</button></Link><br/><br/>
              <TabelaEventos eventos={eventos} onClickExcluirEvento={handleClickExcluirEvento} />
            </>
        );
  
}

const LinhaEvento = (props) => {
    return(
        <tr><td><Link to={`/eventos/${props.evento.id}`}><button>{props.evento.nome}</button></Link></td>
            <td>{props.evento.sigla}</td>
            <td><button id="excluir_evento" name="excluir_evento" onClick={() => props.onClickExcluirEvento(props.evento.id)}>X</button></td>
        </tr>
    );
}

function TabelaEventos(props){
    return(
        <table id="eventos" border="1">
            <tbody>
              {props.eventos.map((evento) => <LinhaEvento key={evento.id} evento={evento} 
              onClickExcluirEvento={props.onClickExcluirEvento} />)}
            </tbody>
        </table>
    );
}

