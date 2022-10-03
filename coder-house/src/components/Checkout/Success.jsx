import React from 'react'

export const Success = ({id}) => {
  return (
    <div>
        <h1>Gracias por su compra!</h1>
        <p>El ID de su pedido és: <b>{id}</b></p>
        <p>Nos estaremos contactando con usted en la brevedad para informarle sobre el envío.</p>
    </div>
  )
}
