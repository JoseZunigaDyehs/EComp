import React from 'react'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/es'

const validate = values => {
  const errors = {}
  console.log('valorea',values);
  if(!values.RecibistePago){
    errors.RecibistePago = 'Requqrido'
  }





  // if (!values.username) {
  //   errors.username = 'Required'
  // } else if (values.username.length > 15) {
  //   errors.username = 'Must be 15 characters or less'
  // }
  // if (!values.email) {
  //   errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address'
  // }
  // if (!values.age) {
  //   errors.age = 'Required'
  // } else if (isNaN(Number(values.age))) {
  //   errors.age = 'Must be a number'
  // } else if (Number(values.age) < 18) {
  //   errors.age = 'Sorry, you must be at least 18 years old'
  // }
  return errors
}

const pintarErrorRadios =  (error,id) => {
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

const renderRadio = ({ input, idError,label, type, id, meta: { touched, error, warning } }) =>
  (
    <div className="custom-control custom-radio mb-3">
      <input id={id} name="RecibistePago" className="custom-control-input" type={type} />
      <label className="custom-control-label" htmlFor={id}>{label}</label>
      {touched &&
        (error && pintarErrorRadios(error,{idError}))}
    </div>
  )

const renderTextarea = ({ label, meta: { touched, error, warning } }) =>
  (
    <div className='mb-5'>
      <p className='fnt-14 c-gris mb-3 f-w-500'>{label}</p>
      <textarea className='w-100' cols="20" rows="10">
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

const EvaluacionForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>

      <div className='mb-5'>
        <label className='fnt-20 mb-3'>¿Recibiste el pago por esta venta?</label>
        <Field idError="errorRecibisteElPago" name="RecibistePago" type="radio" component={renderRadio} label="Sí, ya lo recibí." id="customRadio1" />
        <Field idError="errorRecibisteElPago" name="RecibistePago" type="radio" component={renderRadio} label="No, el servicio aún se está ejecutando." id="customRadio2" />
        <Field idError="errorRecibisteElPago" name="RecibistePago" type="radio" component={renderRadio} label="No, el comprador está atrasado con el pago." id="customRadio3" />
        <span id='errorRecibisteElPago'></span>
      </div>

      <div className='mb-5'>
        <label className='fnt-20 mb-3'>¿En cuántos días recibiste el pago?</label>
        <p className='fnt-14 c-gris mb-3 f-w-500'>Considera desde la fecha de recepción conforme de la factura.</p>
        <Field name="diasPago" type="radio" component={renderRadio} label="En menos de 15 días." id="customRadio4" />
        <Field name="diasPago" type="radio" component={renderRadio} label="Entre 15 y 30 días." id="customRadio5" />
        <Field name="diasPago" type="radio" component={renderRadio} label="Entre 31 y 45 días." id="customRadio6" />
        <Field name="diasPago" type="radio" component={renderRadio} label="Más de 45 días." id="customRadio7" />
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
      </div>

      <Field name="" component={renderTextarea} label='Cuéntanos si tienes sugerencias o si tuviste algún problema.' />

      <div className='mb-5'>
        <label className='fnt-20 mb-3'>¿Cuándo termina de ejecutarse el servicio?</label>
        <div>
          <p className='fnt-14 c-gris f-w-500'>Fecha</p>
          <Field name="terminaEjecutarse" component={renderDatePicker} dateFormat="DD.MM.YYYY" showYearDropdown="{true}" />
          {/* <input type="text" value='dd/mm/aaaa' className='mb-3'/> */}
        </div>
        <div className='bg-green p-3'>
          <p>Te volveremos a contactar 30 días después de esa fecha para verificar si el pago fue realizado.</p>
        </div>
      </div>

      <div className='mb-5'>
        <label className='fnt-20 mb-3'>¿Cuándo deberías haber recibido el pago?</label>
        <div>
          <p className='fnt-14 c-gris f-w-500'>Fecha</p>
          <Field name="haberRecibido" component={renderDatePicker} dateFormat="DD.MM.YYYY" showYearDropdown="{true}" />
        </div>
        <div className='bg-green p-3'>
          <p>Te volveremos a contactar en 15 días para verificar si el pago sigue atrasado o fue realizado.</p>
        </div>
      </div>

      <div className='mb-5 d-flex align-items-center'>
        <button type="submit" className='btn btn-primary px-5 py-4 mr-3 f-w-500' disabled={submitting}>EVALUAR</button>
        <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500' disabled={pristine || submitting} onClick={reset}>CANCELAR</button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'EvaluacionForm',
  validate
})(EvaluacionForm)