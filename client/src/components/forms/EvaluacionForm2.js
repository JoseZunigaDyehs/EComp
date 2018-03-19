import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import 'moment/locale/es'

const validate = (values, props) => {
  const errors = {}
  debugger
  console.log(props)
  switch (props.formulario) {
    case 1:
      if (!values.diasPago) {
        errors.diasPago = 'Requerido'
      }
      if (!values.sugerencias) {
        errors.diasPago = 'Requerido'
      }
      break;
    case 2:

      break;
    case 3:

      break;

    default:
      break;
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

const renderTextarea = ({ label, name, meta: { touched, error, warning } }) =>
  (
    <div className='mb-5'>
      <p className='fnt-14 c-gris mb-3 f-w-500'>{label}</p>
      <textarea name='sugerencias' className='w-100' cols="20" rows="10">
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

class EvaluacionForm2 extends Component {

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

        <div className='mb-5 '>
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

        <div className='mb-5 align-items-center'>
          <button type="submit" className='btn btn-primary px-5 py-4 mr-3 f-w-500' disabled={submitting}>EVALUAR</button>
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
)(EvaluacionForm2);

export default reduxForm({
  form: 'EvaluacionForm2',
  validate
})(EvaluacionFormRedux)