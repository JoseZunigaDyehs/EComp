import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import axios from 'axios'
import Evaluacion from '../components/Evaluacion'

const TextoMain = () => (
  <div className='container pt-5'>
    <div className='row justify-content-center'>
      <div className="d-flex flex-column col-md-8 text-center pt-5">
        <h1 className='mb-4'>¿Tienes una idea para mejorar Mercado Público?</h1>
        <p className='mb-4'>Te proponemos un espacio de conversación sobre mejoras e ideas para que juntos, podamos mejorar la forma de comprar y vender en el Estado.</p>
      </div>
    </div>
  </div>
)

class Home extends Component {

  componentWillMount() {

  }

  render() {
    return (
      <main>
        <Evaluacion />
        {/* <TextoMain /> */}
      </main >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // countIdeas: state.countIdeas,
    // countUsers: state.countUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getCountIdeas: () => {
    //   axios.get('http://10.0.1.1:8000/ideas/count/')
    //     .then(res => {
    //       dispatch({ type: 'COUNT_IDEAS', data: res.data.ideas_count })
    //       MostrarEstadisticas(res.data.ideas_count, 0, 'totalIdeas')
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // },
    // clear: () => {
    //   dispatch({ type: 'CLEAR_COUNT_IDEAS' })
    //   dispatch({ type: 'CLEAR_COUNT_USERS' })
    // },
    // getCountUsers: () => {
    //   axios.get('http://10.0.1.1:8000/users/count/')
    //     .then(res => {
    //       dispatch({ type: 'COUNT_USERS', data: res.data.users_count })
    //       MostrarEstadisticas(res.data.users_count, 0, 'totalParticipantes')
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)