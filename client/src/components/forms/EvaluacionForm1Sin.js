import React, { Component } from 'react'
import { connect } from 'react-redux'

const pintarErrorRadios = (error, id) => {
  document.getElementById(id.idError).innerText = error
}

const overStar = (e) => {
  const valor = e.currentTarget.dataset.star
  switch (valor) {
    case '1':
      document.getElementById('nombreEvaluacion').innerText = 'MUY MALA'
      break;
    case '2':
      document.getElementById('nombreEvaluacion').innerText = 'MALA'
      break;
    case '3':
      document.getElementById('nombreEvaluacion').innerText = 'REGULAR'
      break;
    case '4':
      document.getElementById('nombreEvaluacion').innerText = 'MUY BUENA'
      break;
    case '5':
      document.getElementById('nombreEvaluacion').innerText = 'EXCELENTE'
      break;
    default:
      break;
  }
  document.getElementById('nombreEvaluacion').classList.remove('transp')
  document.getElementById('errorNombreEvaluacion').innerText = ''

  let stars = document.getElementsByClassName('fa-star')
  let numero = e.currentTarget.dataset.star
  numero = parseInt(numero)
  for (let i = 1; i <= stars.length; i++) {
    const element = stars[i - 1];
    if (i <= numero) {
      element.classList.remove('f-w-300')
      element.classList.add('f-w-700')
    } else {
      element.classList.remove('f-w-700')
      element.classList.add('f-w-300')
    }
  }
}
const leaveStar = (e) => {
  let valor = e.currentTarget.dataset.star
  document.getElementById('nombreEvaluacion').dataset.calificacion = valor
}

const limpiarErrores = () => {
  document.getElementById('errorDiasPago').innerText = ''
  document.getElementById('errorNombreEvaluacion').innerText = ''
  document.getElementById('errorSugerencia').innerText = ''
}

const validar = () => {

  let valido = true;
  limpiarErrores()

  //OPCIONES
  let opcionDiasDePago = null;
  if(document.getElementsByName('diasPago').length>0){
    let opciones = document.getElementsByName('diasPago')
    for (let i = 0; i < opciones.length; i++) {
      const opt = opciones[i];
      if(opt.checked){
        opcionDiasDePago=opt.value;
      }
    }
    if(opcionDiasDePago=== null){
      document.getElementById('errorDiasPago').innerText = 'Requerido'
      valido = false;
    }
  }

  //ESTRELLAS
  if(document.getElementById('nombreEvaluacion') !== null){
    let calificacion = document.getElementById('nombreEvaluacion').dataset.calificacion
    if(calificacion==='0'){
      document.getElementById('errorNombreEvaluacion').innerText = 'Requerido'
      valido = false;
    }
  }

  //SUGERENCIAS
  if(document.getElementById('sugerencias') !== null){
    let sugerencias = document.getElementById('sugerencias').value
    if (sugerencias.length > 400) {
      document.getElementById('errorSugerencia').innerText = 'No puede ser mayor a 400 caracteres'
      valido = false
    }
  }

  //FIN
  if(valido){
    //MANDAR
    return;
  }

}

class EvaluacionForm1Sin extends Component {

  render() {

    if (document.getElementById('form') !== null && document.getElementById('form').classList.contains('fade-in')) {
      document.getElementById('form').classList.remove('fade-in')
    }
    setTimeout(() => {
      if (document.getElementById('form') !== null) {
        document.getElementById('form').classList.add('fade-in')
      }
    }, 10);

    return (
      <div id='form' style={{ opacity: '0' }} data-formuario={this.props.formulario}>

        <div className='mb-5'>
          <label className='fnt-20 mb-0'>¿En cuántos días recibiste el pago?</label>
          <p className='fnt-14 c-gris mb-3 f-w-500'>Considera desde la fecha de recepción conforme de la factura.</p>
          <div className="custom-control custom-radio mb-3">
            <input type="radio" id="customRadio4" name="diasPago" className="custom-control-input" value="1" onChange={validar}/>
            <label className="custom-control-label" htmlFor="customRadio4">En menos de 15 días.</label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input type="radio" id="customRadio5" name="diasPago" className="custom-control-input" value="2" onChange={validar}/>
            <label className="custom-control-label" htmlFor="customRadio5">Entre 15 y 30 días.</label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input type="radio" id="customRadio6" name="diasPago" className="custom-control-input" value="3" onChange={validar}/>
            <label className="custom-control-label" htmlFor="customRadio6">Entre 31 y 45 días.</label>
          </div>
          <div className="custom-control custom-radio mb-3">
            <input type="radio" id="customRadio7" name="diasPago" className="custom-control-input" value="4" onChange={validar}/>
            <label className="custom-control-label" htmlFor="customRadio7">Más de 45 días.</label>
          </div>
          <p className='c-red' id='errorDiasPago'> </p>
        </div>

        <div className='mb-5'>
          <label className='fnt-20 mb-3'>¿Cómo calificarías tu <strong>experiencia </strong> con Ilustre Municipalidad de Linares?</label>
          <div className='stars d-flex align-items-center'>
            <div data-star='1' className='position-relative d-flex flex-column justify-content-center align-items-center mr-3' onMouseOver={overStar} onMouseLeave={leaveStar}>
              <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
            </div>
            <div data-star='2' className='position-relative d-flex flex-column justify-content-center align-items-center mr-3' onMouseOver={overStar} onMouseLeave={leaveStar}>
              <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
            </div>
            <div data-star='3' className='position-relative d-flex flex-column justify-content-center align-items-center mr-3' onMouseOver={overStar} onMouseLeave={leaveStar}>
              <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
            </div>
            <div data-star='4' className='position-relative d-flex flex-column justify-content-center align-items-center mr-3' onMouseOver={overStar} onMouseLeave={leaveStar}>
              <i className="mb-2 fas fa-star fnt-38 f-w-300 "></i>
            </div>
            <div data-star='5' className='position-relative d-flex flex-column justify-content-center align-items-center mr-3' onMouseOver={overStar} onMouseLeave={leaveStar}>
              <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
            </div>
            <p className='ml-2 fnt-14 f-w-700 l-s-1 c-gris transp' id='nombreEvaluacion' data-calificacion='0'>EXCELENTE</p>
          </div>
            <p className='c-red' id='errorNombreEvaluacion'></p>
        </div>

        <div className='mb-5'>
          <p className='fnt-14 c-gris mb-3 f-w-500' >Cuéntanos si tienes sugerencias o si tuviste algún problema.</p>
          <textarea className='w-100' cols="20" rows="10" id='sugerencias' onChange={validar}>

          </textarea>
          <p className='c-red' id='errorSugerencia'> </p>
        </div>
        <div className='mb-5 align-items-center d-flex'>
          <button className='btn btn-primary px-5 py-4 mr-3 f-w-500' onClick={validar}>EVALUAR</button>
          <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500'>CANCELAR</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  formulario: state.formulario
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluacionForm1Sin);