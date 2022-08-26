import React, {useState} from 'react'
import ChildComponente from '../pure/child'

export default function Father() {

    const [name, setName] = useState('javier')


    function funcionPadre(texto){
        alert(`desde hijo: ${texto}`)
    }

    function funcionEnvio(texto){
      setName(texto);




  }    

  return (
    <div>
    <ChildComponente name={name} send={funcionPadre} envio={funcionEnvio}></ChildComponente>
    </div>
  )
}
