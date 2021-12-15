import React from 'react'
import {FaInstagram, FaFacebook} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from "../img/villa-terracotta-logo-editado.png"


export default function Navbar () {

  return (
  <>
    <div className = "sidenav" id = "sidenav">
      <ul className = "navbar">
        <li><img src={logo}/></li>
        <li><a href = "#home">Pousada</a></li>
        <li ><a href = "#quartos">Quartos</a></li>
        <li ><a href = "#galeria">Galeria</a></li>
        <li><a href="#eventos">Eventos</a></li>
        <li ><a href = "#contato">Contato</a></li>
      </ul>
    </div>

    <button className = "btn cadastrar"><a>cadastrar</a> </button>
    <button className = "btn login">login</button>

    </>
  )
}