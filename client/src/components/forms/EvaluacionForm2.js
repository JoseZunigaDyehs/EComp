import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import InputFecha from './InputFecha'

const validate = () => {
  let valido = true;
  // if (!ValidarFecha()) {
  //   valido = false;
  // }
  return valido
}

class EvaluacionForm2 extends Component {

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

        <div className='mb-5'>
          <label className='fnt-20 mb-3'>¿Cuándo termina de ejecutarse el servicio?</label>
          <div className='mb-5'>
            <p className='fnt-14 c-gris f-w-500'>Fecha</p>
            <InputFecha id='terminaEjecutarse'/>
            {/* <DatePicker  id="terminaEjecutarse"  name='terminaEjecutarse' className='fecha' dateForm="MM/DD/YYYY" /> */}
            {/* <Field component={renderDatePicker} name='terminaEjecutarse' dateFormat="DD.MM.YYYY" showYearDropdown="{true}" /> */}
            <p id='errorTerminaEjecutarse' className='c-red'></p>
            {/* <input type="text" value='dd/mm/aaaa' className='mb-3'/> */}
          </div>
          <div className='bg-green p-3'>
            <p>Te volveremos a contactar 30 días después de esa fecha para verificar si el pago fue realizado.</p>
          </div>
        </div>

        <div className='mb-5 align-items-center'>
          <button onClick={validate} className='btn btn-primary px-5 py-4 mr-3 f-w-500'>EVALUAR</button>
          {/* <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500' disabled={pristine || submitting} onClick={reset}>CANCELAR</button> */}
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
)(EvaluacionForm2);

export default reduxForm({
  form: 'EvaluacionForm2'
})(EvaluacionFormRedux)