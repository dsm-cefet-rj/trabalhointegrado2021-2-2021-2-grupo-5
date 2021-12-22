import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Cadastro () {

  return (
  <>
          <form method="get">
          <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">Primeiro nome</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Nome" required
                     name="nome1"/>
          </div>

          <div className="col-md-4 mb-3">
              <label htmlFor="validationCustom01">Sobrenome</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Sobrenome" required
                     name="name2"/>
          </div>


          <div className="col-md-4 mb-3">
              <label htmlFor="e-mail">E-mail</label>
              <input type="email" className="form-control" id="e-mail" placeholder="Insira um e-mail válido"
                     name="email"/>
          </div>
          <div className="col-md-4 mb-3">
              <label htmlFor="cpf">CPF</label>
              <input type="text" className="form-control" id="cpf" placeholder="Somente números" name="cpf"/>
          </div>


          <div className="col-md-4 mb-3">
              <input type="text" className="form-control" id="validationDefault05" placeholder="CEP residencial"
                     name="cep"/>
          </div>

          <div className="col-md-4 mb-3">
              <label htmlFor="endereco">Endereço</label>
              <input type="text" className="form-control" id="endereco" placeholder="Rua, número, complemento"
                     name="endereco"/>
          </div>


          <div className="col-md-4 mb-3">
              <input type="text" className="form-control" placeholder="Cidade" name="cidade"/>
                  <br />
                      <input type="text" className="form-control" placeholder="Estado" name="estado"/>
          </div>
          <br />


              <br />

                  <div className="container mt-5">
                      <button type="button" className="btn btn-primary btn-sm form-control">
                          salvar


                      </button>
                  </div>

      </form>


  </>
  )
}



