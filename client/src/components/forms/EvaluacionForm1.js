import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/es'

const validate = (values) => {
  const errors = {}
  debugger
  if(document.getElementsByClassName)
  // if (!values.RecibistePago) {
  //   errors.RecibistePago = 'Requerido'
  // }
  if (!values.sugerencias) {
    errors.sugerencias = 'Requerido'
  }
  if(!values.nombreEvaluacion){
    if(document.getElementById('errorNombreEvaluacion')!==null){
      document.getElementById('errorNombreEvaluacion').innerText='Requerido'
    }

    
  }
  return errors
}

const pintarErrorRadios = (error, id) => {
  document.getElementById(id.idError).innerText = error
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
  (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

const renderRadio = ({ input, idError, label, type, id, meta: { touched, error, warning } }) =>
  (
    <div className="custom-control custom-radio mb-3">
      <input id={id} name="RecibistePago" className="custom-control-input" type={type} />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
      {touched &&
        (error && pintarErrorRadios(error, { idError }))}
    </div>
  )

const renderTextarea = ({ input, label, meta: { touched, error, warning } }) =>
  (
    <div className='mb-5'>
      <p className='fnt-14 c-gris mb-3 f-w-500'>{label}</p>
      <textarea {...input} className='w-100' cols="20" rows="10">
      </textarea>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  )

const renderDatePicker = ({ input, placeholder, defaultValue, meta: { touched, error } }) => (
  <div>
    <DatePicker className='fecha mb-5' {...input} dateForm="MM/DD/YYYY" selected={input.value ? moment(input.value) : null} />
    {touched && error && <span>{error}</span>}
  </div>
);
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

class EvaluacionForm1 extends Component {

  render() {
    const { handleSubmit, pristine, reset, submitting, formulario } = this.props

    if (document.getElementsByTagName('form').length !== 0 && document.getElementsByTagName('form')['0'].classList.contains('fade-in')) {
      document.getElementsByTagName('form')['0'].classList.remove('fade-in')
    }
    setTimeout(() => {
      if (document.getElementsByTagName('form').length !== 0) {
        document.getElementsByTagName('form')['0'].classList.add('fade-in')
      }
    }, 10);

    return (
      <form onSubmit={handleSubmit} style={{ opacity: '0' }} data-formuario={this.props.formulario}>
        <div className='mb-5'>
          <label className='fnt-20 mb-3'>¿En cuántos días recibiste el pago?</label>
          <p className='fnt-14 c-gris mb-3 f-w-500'>Considera desde la fecha de recepción conforme de la factura.</p>
          <Field name="diasPago" type="radio" component={renderRadio} label="En menos de 15 días." id="customRadio4" idError={'errorDiasPago'} />
          <Field name="diasPago" type="radio" component={renderRadio} label="Entre 15 y 30 días." id="customRadio5" idError={'errorDiasPago'} />
          <Field name="diasPago" type="radio" component={renderRadio} label="Entre 31 y 45 días." id="customRadio6" idError={'errorDiasPago'} />
          <Field name="diasPago" type="radio" component={renderRadio} label="Más de 45 días." id="customRadio7" idError={'errorDiasPago'} />
          <p id='errorDiasPago'> </p>
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
            <p id='errorNombreEvaluacion' name='nombreEvaluacion'></p>
          </div>
        </div>

        <Field name="sugerencias" component={renderTextarea} label='Cuéntanos si tienes sugerencias o si tuviste algún problema.' />

        <div className='mb-5 align-items-center d-flex'>
          <button type="submit" className='btn btn-primary px-5 py-4 mr-3 f-w-500' disabled={submitting} onClick={validate}>EVALUAR</button>
          <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500' disabled={pristine || submitting} onClick={reset}>CANCELAR</button>
        </div>

      </form>
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
)(EvaluacionForm1);

export default reduxForm({
  form: 'EvaluacionForm1',
  validate
})(EvaluacionFormRedux)