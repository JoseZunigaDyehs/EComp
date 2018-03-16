import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style.css'
import Home from './Home'
import Header from '../components/Header'
// import IdeaContainer from './IdeaContainer'
// import SubirIdea from './SubirIdea'
// import Footer from '../components/shared/Footer'

// const Header = (props) => {

//   return (
//     <header className="container-fluid">
//       {/* <nav class="navbar navbar-expand-lg navbar-light text-uppercase">
//         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div class="navbar-nav">
//             <Link to='/' className='f-w-500 fnt-12 mr-4 btn btn-secondary'>ver Ideas</Link>
//             <Link to='/subir-idea' className='f-w-500 fnt-12 btn btn-secondary'>comparte tu Idea</Link>
//           </div>
//         </div>
//       </nav> */}
//     </header>
//   )
// }


const App = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  )

}


const mapStateToProps = (state) => {
  return {
    // login: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // logeo: (datos) => {
    //   dispatch({ type: 'LOGIN', data: datos })
    // },
    // errorLogin: (err) => {
    //   dispatch({ type: 'LOGIN_ERROR', data: err })
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
