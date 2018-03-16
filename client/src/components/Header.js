import React from 'react'

const Header = () => (
  <header className='container my-5 pt-5'>
    <div className='row mt-3'>
      <div className='col-md-12'>
        <h2 className='mb-3'>¿Cómo resultó el negocio con <strong>Ilustre Municipalidad de Linares</strong></h2>
        <div className='d-flex'>
          <div className='d-flex text-uppercase mr-5'>
            <p className='c-gris fnt-14 f-w-700 l-s-1 mr-1'>ORDEN DE COMPRA: </p>
            <p className='c-green fnt-14 f-w-700 l-s-1'> 2343-142-CM18</p>
          </div>
          <div className='d-flex text-uppercase'>
            <p className='c-gris fnt-14 f-w-700 l-s-1 mr-1'>FECHA DE ENVíO: </p>
            <p className='c-gris fnt-14 f-w-700 l-s-1'> 23-12-2017</p>
          </div>
        </div>
        <hr className='linea-black'/>
        <div className='d-flex w-100 justify-content-end'>
          <a href="#!" className='link-pri'>Ver Ficha del Comprador</a>
        </div>
      </div>
    </div>
  </header>
)

export default Header;