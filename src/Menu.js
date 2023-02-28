import React, { Component } from 'react'

export default class menu extends Component {
  cerrarsesion=()=>{
    window.location.href='./';
  }

  render() {
    //console.log(response.status);
    return (
      <div>Menu Principal
        <br></br>
        <button onClick={()=>this.cerrarsesion()}>Cerrar Sesión</button>

      </div>

    )
  }
}
