import React, { Component } from 'react'
 
 class LifeCycleClass extends Component {
     
     constructor(props) {
         super(props)
         console.log('CONSTRUCTOR: Cuando se instancia el componente');
     }
 
     componentWillMount() {
         console.log('WillMount: Antes del montaje del componente');
     }
 
     componentDidMount() {
         console.log('DidMount: Justo al del montaje del componente, antes de renderizarlo')
     }
 
     componentWillReceiveProps(nextProps) {
         console.log('WillReceiveProps: Si va a recibir nuevas props')
     }
 
     shouldComponentUpdate(nextProps, nextState) {
         /**
          * Controlar si el componente debe o no actualizarse
          */
         // return true / false
     }
 
     componentWillUpdate(nextProps, nextState) {
         console.log('WillUpdate: Justo antes de actualizarse');
     }
 
     componentDidUpdate(prevProps, prevState) {
         console.log('DidUpdate: Justo después de actualizarse');
     }
 
     componentWillUnmount() {
         console.log('WillUnmount: Justo antes de desaparecer')
     }
 
     render() {
         return (
             <div>
                <h2>Ejemplo de ciclo de vida Clase</h2>
             </div>
         )
     }
 }
 
 export default LifeCycleClass