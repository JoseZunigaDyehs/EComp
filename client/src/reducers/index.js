import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { formulario } from './formulario'

export default combineReducers({
  form: formReducer,
  formulario
})