import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import cartao from "../img/cartao.png"
import boleto from "../img/boleto.png"
import transferencia from "../img/transferencia.jpg"


export default function Pagamento () {

    return (
    <>

<div className="container p-5 my-5 bg-white text-black text-center">
  <h2>ESCOLHA SUA FORMA DE PAGAMENTO</h2>
</div>
  
<div className="container mt-5">
  <div className="row text-center">
    <div className="col-sm-4">
      <h4>CARTÃO DE CRÉDITO/DÉBITO</h4>
      <img className="img-responsive" src={cartao} alt="Ícone cartão" usemap="#workmap"/>

      <map name="workmap">
        <area shape="default" alt="Cartão" href="cartao.html"/>
      </map>
    </div>
    <div className="col-sm-4">
      <h4>BOLETO BANCÁRIO</h4>
      <img className="img-responsive" src={boleto} alt="Ícone cartão" usemap="#workmap" width="200" height="230"/>

      <map name="workmap">
        <area shape="default" alt="Ícone boleto bancário" href="boleto.html"/>
      </map>
    </div>
    <div className="col-sm-4">
      <h4>TRANSFERÊNCIA BANCÁRIA</h4>
      <img className="img-responsive" src={transferencia} alt="Ícone transferência bancária" usemap="#workmap" widht="200" height="200"/>

      <map name="workmap">
        <area shape="default" alt="Transferência" href="transferencia.html"/>
      </map>
    </div>
  </div>
</div>
</>
    )
}