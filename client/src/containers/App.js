import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style.css'
import Home from './Home'
import Header from '../components/Header'

const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/valoracion/' component={Home} />
      </div>
    </Router>
  )

}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
