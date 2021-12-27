import React from 'react'
import {FaInstagram, FaFacebook, FaWhatsapp} from "react-icons/fa"
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';



export default function Footer () {

  return (
  <>
       
      <footer>
      <FaWhatsapp size={"5%"} className='mr-3'/>
      <FaFacebook size={"5%"} className='mr-3'/>
      <FaInstagram size={"5%"} className='mr-3'/>


        <p>
          © 2021 Pousada Villa Terracotta
        </p>
      </footer>
    

      </>
  )
}

