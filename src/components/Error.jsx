import React from 'react'

export default function Error({statusCode}) {
  return (
    <div className='row'>
        <div className="md-col-4 text-white text-center" style={{height:'100vh', width:'100vw'}}>
            <h1>Error de carga</h1>
            <p>No se posible cargar el perfil de GitHub</p>
        </div>
    </div>
  )
}
