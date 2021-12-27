import React from 'react'
import {FaInstagram, FaFacebook} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import banner from "../img/banner.jpg"
import logo from "../img/villa-terracotta-logo-editado.png"
import suite from "../img/20201023_111612 (1).jpg"
import triplo from "../img/20201023_112339 (2).jpg"


export default function Home () {

  return (
  <>
       
    
      <div className="banner">
        <img className="img-responsive"  src = {banner}/>
      </div>
    
    <section className = "home sec-width" id = "home">
      <div className="container-home">
        <h2 className="titulo-centralizado">A Pousada</h2>
    
        <div className="row">
            <div className="col-sm">
          A Pousada Villa Terracotta está localizada em Miguel Pereira e oferece o que há de melhor na cidade: tranquilidade, hospitalidade e um clima maravilhoso!
          Todos os quartos possuem TV tela plana, camas queen size, frigobar, ventilador e banheiros particulares. 
            </div>
            <div className="col-sm">
          Alguns quartos possuem vista para o amplo jardim e piscina.	Além dos quartos, você poderá usufruir da piscina, churrasqueira, cozinha compacta, áreas de descanso e de
          um ótimo café da manhã.
           </div>
        </div>
      </div>
    </section>
    
    <section className = "quartos sec-width" id = "quartos">
      <div className="card mb-3">
        <img className="card-img-top" src={suite} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Suíte</h5>
          <p className="card-text">Acomoda 2 pessoas</p>
          <a href="Reserva.html" className="btn reservar" >Reservar</a>
        </div>
        </div>
        <div className="card">
        <img className="card-img-top" src={triplo} alt="Card image cap"/>
    
        <div className="card-body">
          <h5 className="card-title">Triplo</h5>
          <p className="card-text">Acomoda 3 pessoas</p>
          <a href="Reserva.html" className="btn reservar" >Reservar</a>
        </div>
      </div>
    </section>
    
    <section className = "galeria sec-width" id = "galeria">
    
      <div className="div-galeria">
        <h3 className="titulo-centralizado">Galeria</h3>
    
      </div>
    </section>
      
    <section className = "eventos sec-width" id = "eventos">
    
      <div className="div-eventos">
        <h3 className="titulo-centralizado">Eventos</h3>
    
      </div>
    </section>
    
    
      </>
  )
}

