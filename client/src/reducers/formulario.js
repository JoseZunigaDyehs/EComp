export const formulario = (state = 0, action) => {
  var nuevoEstado = Object.assign({}, state);

  switch (action.type) {
    case 'ESTADO_FORM':
      nuevoEstado = state.concat(action.data);
      return nuevoEstado;
    case 'ESTADO_FORM_CLEAR':
      nuevoEstado = 0;
      return nuevoEstado;  
    case 'SET_ESTADO_FORM':
      nuevoEstado = action.data;
      return nuevoEstado;      
    default:
      return state;
  }

}