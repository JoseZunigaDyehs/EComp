import React from 'react'

var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const Header = () => (
  <header className='container'>
    <div className='row h-100vh align-content-center'>
      <div className='col-md-12'>
        <h2 className='mb-4'>¿Cómo resultó el negocio con <strong>Ilustre Municipalidad de Linares</strong>?</h2>
      </div>
      <div className='col-md-6 d-flex text-uppercase'>
        <p className='c-gris fnt-14 f-w-700 l-s-1 mr-1'>ORDEN DE COMPRA: </p>
        <p className='c-green fnt-14 f-w-700 l-s-1'> 2343-142-CM18</p>
      </div>
      <div className='col-md-6 d-flex text-uppercase'>
        <p className='c-gris fnt-14 f-w-700 l-s-1 mr-1'>FECHA DE ENVíO: </p>
        <p className='c-gris fnt-14 f-w-700 l-s-1'> 23-12-2017</p>
      </div>
      <div className='col-md-12'>
        <hr className='linea-black' />
        <div className='d-flex w-100 justify-content-end'>
          <a href="#!" className='link-pri'>Ver Ficha del Comprador</a>
        </div>
      </div>
    </div>
    <Nav />
  </header>
)

const Nav = () => (
  <i className="fas fa-arrow-down arrow" onClick={(e) => inicio(e)}></i>
)

const inicio = (e) => {
  let inicio = window.innerHeight
  scroll.scrollTo(inicio, {duration: 1000, smooth: true});
}
export default Header;