import React, { Component } from 'react'
import EvaluacionForm1Sin from './forms/EvaluacionForm1Sin'
import EvaluacionForm2 from './forms/EvaluacionForm2'
import EvaluacionForm3 from './forms/EvaluacionForm3'
import { connect } from 'react-redux'


// const DiasPago = () => (
//   <div className='mb-5'>
//     <label className='fnt-20 mb-0'>¿En cuántos días recibiste el pago?</label>
//     <p className='fnt-14 c-gris mb-3 f-w-500'>Considera desde la fecha de recepción conforme de la factura.</p>
//     <div className="custom-control custom-radio mb-3">
//       <input type="radio" id="customRadio4" name="diasPago" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="customRadio4">En menos de 15 días.</label>
//     </div>
//     <div className="custom-control custom-radio mb-3">
//       <input type="radio" id="customRadio5" name="diasPago" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="customRadio5">Entre 15 y 30 días.</label>
//     </div>
//     <div className="custom-control custom-radio mb-3">
//       <input type="radio" id="customRadio6" name="diasPago" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="customRadio6">Entre 31 y 45 días.</label>
//     </div>
//     <div className="custom-control custom-radio mb-3">
//       <input type="radio" id="customRadio7" name="diasPago" className="custom-control-input" />
//       <label className="custom-control-label" htmlFor="customRadio7">Más de 45 días.</label>
//     </div>
//   </div>
// )

// const CalificarExperiencia = () => (
//   <div className='mb-5'>
//     <label className='fnt-20 mb-3'>¿Cómo calificarías tu <strong>experiencia </strong> con Ilustre Municipalidad de Linares?</label>
//     <div className='starts d-flex'>
//       <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
//         <i className="mb-2 fas fa-star fnt-38"></i>
//         <p className='fnt-14 f-w-700 l-s-1 c-gris'>MUY MALA</p>
//       </div>
//       <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
//         <i className="mb-2 fas fa-star fnt-38"></i>
//         <p className='fnt-14 f-w-700 l-s-1 c-gris'>MALA</p>
//       </div>
//       <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
//         <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
//         <p className='fnt-14 f-w-700 l-s-1 c-gris'>REGULAR</p>
//       </div>
//       <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
//         <i className="mb-2 fas fa-star fnt-38 f-w-300 "></i>
//         <p className='fnt-14 f-w-700 l-s-1 c-gris'>MUY BUENA</p>
//       </div>
//       <div className='d-flex flex-column justify-content-center align-items-center mr-3'>
//         <i className="mb-2 fas fa-star fnt-38 f-w-300"></i>
//         <p className='fnt-14 f-w-700 l-s-1 c-gris'>EXCELENTE</p>
//       </div>
//     </div>
//   </div>
// )

// const Sugerencias = () => (
//   <div className='mb-5'>
//     <p className='fnt-14 c-gris mb-3 f-w-500'>Cuéntanos si tienes sugerencias o si tuviste algún problema.</p>
//     <textarea className='w-100' cols="20" rows="10">

//     </textarea>
//   </div>
// )

// const Botones = () => (
//   <div className='mb-5 d-flex align-items-center'>
//     <button type="submit" className='btn btn-primary px-5 py-4 mr-3 f-w-500'>EVALUAR</button>
//     <button type="submit" className='btn btn-ghost px-5 py-4 f-w-500'>CANCELAR</button>
//   </div>
// )

// const TerminaEjecutarse = () => (
//   <div className='mb-5'>
//     <label className='fnt-20 mb-3'>¿Cuándo termina de ejecutarse el servicio?</label>
//     <div>
//       <p className='fnt-14 c-gris f-w-500'>Fecha</p>
//       {/* <input type="text" value='dd/mm/aaaa' className='mb-3'/> */}
//     </div>
//     <div className='bg-green p-3'>
//       <p>Te volveremos a contactar 30 días después de esa fecha para verificar si el pago fue realizado.</p>
//     </div>
//   </div>
// )

// const HaberRecibidoPago = () => (
//   <div className='mb-5'>
//     <label className='fnt-20 mb-3'>¿Cuándo deberías haber recibido el pago?</label>
//     <div>
//       <p className='fnt-14 c-gris f-w-500'>Fecha</p>
//       {/* <input type="text" value='dd/mm/aaaa'  className='mb-3'/> */}
//     </div>
//     <div className='bg-green p-3'>
//       <p>Te volveremos a contactar en 15 días para verificar si el pago sigue atrasado o fue realizado.</p>
//     </div>
//   </div>
// )

const funcionForma = (datos) => {
  // let config = { 'Authorization': 'Token ' + props.props.login.token }
  // axios.post('http://10.0.1.1:8000/ideas/post/',
  //   {
  //     name: datos.nombre,
  //     category: datos.categoria,
  //     content: datos.descripcion
  //   }
  //   , {
  //     headers: config
  //   }
  // )
  //   .then(res => {
  //     props.props.creado()
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   })
  //   .catch(err => {
  //     console.log(err)
  //     props.props.error()
  //     document.body.scrollTop = 0;
  //     document.documentElement.scrollTop = 0;
  //   })
}

const RecibistePago = (props) => (
  <div className='mb-5'>
    <label className='fnt-20 mb-3'>¿Recibiste el pago por esta venta?</label>
    <div className="custom-control custom-radio mb-3" onClick={(e) => props.props.cambiarEstado(e, 1)}>
      <input type="radio" id="customRadio" name="RecibistePago" className="custom-control-input" />
      <label className="custom-control-label" htmlFor="customRadio">Sí, ya lo recibí.</label>
    </div>
    <div className="custom-control custom-radio mb-3" onClick={(e) => props.props.cambiarEstado(e, 2)}>
      <input type="radio" id="customRadio2" name="RecibistePago" className="custom-control-input" />
      <label className="custom-control-label" htmlFor="customRadio2">No, el servicio aún se está ejecutando.</label>
    </div>
    <div className="custom-control custom-radio mb-3" onClick={(e) => props.props.cambiarEstado(e, 3)}>
      <input type="radio" id="customRadio3" name="RecibistePago" className="custom-control-input" />
      <label className="custom-control-label" htmlFor="customRadio3">No, el comprador está atrasado con el pago.</label>
    </div>
  </div>
)

class Evaluacion extends Component {
  render() {
    switch (this.props.formulario) {
      case 1:
        return (
          <section className='container' id='inicio'>
            <div className='row'>
              <div className='col-md-8 mt-5 h-100vh'>
                <RecibistePago props={this.props} />
                <EvaluacionForm1Sin formulario={this.props.formulario} />
                {/* <SyncValidationForm onSubmit={funcionForma} /> */}
              </div>
            </div>
          </section>
        )
        break;
      case 2:
        return (
          <section className='container' id='inicio'>
            <div className='row'>
              <div className='col-md-8 mt-5 h-100vh'>
                <RecibistePago props={this.props} />
                <EvaluacionForm2 onSubmit={funcionForma} formulario={this.props.formulario} />
                {/* <SyncValidationForm onSubmit={funcionForma} /> */}
              </div>
            </div>
          </section>
        )
        break;
      case 3:
        return (
          <section className='container' id='inicio'>
            <div className='row'>
              <div className='col-md-8 mt-5 h-100vh'>
                <RecibistePago props={this.props} />
                <EvaluacionForm3 formulario={this.props.formulario} />
                {/* <SyncValidationForm onSubmit={funcionForma} /> */}
              </div>
            </div>
          </section>
        )
        break;

      default:
      return (
        <section className='container' id='inicio'>
          <div className='row'>
            <div className='col-md-8 mt-5 h-100vh'>
              <RecibistePago props={this.props} />
              {/* <EvaluacionForm3 onSubmit={funcionForma} formulario={this.props.formulario} /> */}
              {/* <SyncValidationForm onSubmit={funcionForma} /> */}
            </div>
          </div>
        </section>
      )
        break;
    }

  }
}

const mapStateToProps = (state) => ({
  formulario: state.formulario
});

const mapDispatchToProps = (dispatch) => ({
  cambiarEstado: (e, estado) => {
    estado = parseInt(estado)
    dispatch({ type: 'SET_ESTADO_FORM', data: estado })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Evaluacion)
