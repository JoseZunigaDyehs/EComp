import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import InputFecha from './InputFecha'

const validarTodo = () => {
  let valido = true;
  // debugger
  // if (!ValidarFecha()) {
  //   valido = false;
  // }
  if (!ValidarEstrellas()) {
    valido = false;
  }
  return valido
}

const ValidarEstrellas = () => {
  let valido = true;
  let calificacion = document.getElementById('nombreEvaluacion').dataset.calificacion
  if (calificacion === '0') {
    document.getElementById('errorNombreEvaluacion').innerText = 'Requerido'
    valido = false;
  }else{
    document.getElementById('errorNombreEvaluacion').innerText = ''
  }
  return valido
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

class EvaluacionForm3 extends Component {

  render() {

    if (document.getElementById('form') !== null  && document.getElementById('form').classList.contains('fade-in')) {
      document.getElementById('form').classList.remove('fade-in')
    }
    setTimeout(() => {
      if (document.getElementById('form') !== null ) {
        document.getElementById('form').classList.add('fade-in')
      }
    }, 10);

    return (
      <div id='form' style={{ opacity: '0' }} data-formuario={this.props.formulario}>

        <div className='mb-5 '>
          <label className='fnt-20 mb-3'>¿Cuándo deberías haber recibido el pago?</label>
          <div className='mb-5'>
            <p className='fnt-14 c-gris f-w-500'>Fecha</p>
            <InputFecha id='haberRecibido'/>
            {/* <Field id="haberRecibido" name='haberRecibido' component={renderDatePicker} dateFormat="DD.MM.YYYY" showYearDropdown="{true}" /> */}
            <p id='errorTerminaEjecutarse' className='c-red'></p>
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
          <div className='bg-green p-3'>
            <p>Te volveremos a contactar en 15 días para verificar si el pago sigue atrasado o fue realizado.</p>
          </div>
        </div>

        <div className='mb-5 align-items-center'>
          <button className='btn btn-primary px-5 py-4 mr-3 f-w-500' onClick={validarTodo}>EVALUAR</button>
          {/* <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500' >CANCELAR</button> */}
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

const EvaluacionFormRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluacionForm3);

export default reduxForm({
  form: 'EvaluacionForm2'
})(EvaluacionFormRedux)