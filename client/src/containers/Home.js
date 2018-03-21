import React, { Component } from 'react'
import { connect } from 'react-redux'
import Evaluacion from '../components/Evaluacion'

class Home extends Component {

  render() {
    debugger
    return (
      <main>
        <Evaluacion />
      </main >
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)