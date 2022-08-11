import React from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../models/Contact'

function ContactComponent({ contact }) {
  return (
    <div>
    <h2>Nombre: {contact.name}</h2>
    <h3>Apellido: {contact.lastName}</h3>
    <h3>Email: {contact.email}</h3>
    <h3>Estado: {contact.conected? 'Contacto En Línea':'Contacto No Disponible'}</h3>
    </div>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
}

export default ContactComponent
