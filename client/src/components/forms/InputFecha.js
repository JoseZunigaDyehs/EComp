import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import 'moment/locale/es'

import "react-datepicker/dist/react-datepicker.css";

class InputFecha extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment()
    };
  }

  ValidarFecha = () => {
    setTimeout(() => {      
      debugger
      let valido = true;
      let fecha = document.getElementsByClassName('fecha')['0'].value;
      if (fecha === "") {
        document.getElementById('errorTerminaEjecutarse').innerText = 'Requerido'
        valido = false;
      }else{
        document.getElementById('errorTerminaEjecutarse').innerText = ''
      }
      return valido;
    }, 250);
  }

  render() {
    return (
      <DatePicker className='fecha'
        selected={this.state.startDate}
        onChange={this.ValidarFecha}
      />
    );
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
}

export default InputFecha;