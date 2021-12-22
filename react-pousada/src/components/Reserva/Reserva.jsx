import React from 'react'
import {FaInstagram, FaFacebook} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import Quarto from "../img/Quarto.jpg"


export default function Home () {

  return (
  <>
       
    
      <div className="banner">
        <img className="img-responsive"  src = {banner}/>
      </div>
    
      <h2>Preço: <span class="badge rounded-pill bg-dark text-light">$$$ por noite</span></h2>
    <form action="pagamento.html">
      <div class="text-center">
          <img src = {Quarto} class="rounded" class="img-fluid" alt="Quarto">
        </div>
      <div class="mb-3">
          <label for="checkin" class="form-label">Check in:</label>
          <input type="date" class="form-control" id="checkin" placeholder="dd-mm-yyyy">
      </div>
    <div class="mb-3">
        <label for="checkout" class="form-label">Check out:</label>
        <input type="date" class="form-control" id="checkout" placeholder="dd-mm-yyyy">
    </div>
    <div class="mb-3">
        <label for="hospedes" class="form-label">Hóspedes</label>
        <input type="number" class="form-control" id="hospedes" placeholder="1" min="1" max="5">
    </div>  
    <div class="mb-3">
        <button class="w3-button w3-light-grey"><a href ="pagamento.html">Reservar</a></button>
    </div>
    
    
      </>
  )
}

