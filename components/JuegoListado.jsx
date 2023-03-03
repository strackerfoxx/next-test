import React from 'react'
import Image from 'next/image'

export default function JuegoListado({juego}) {
    const {title, thumbnail, genre} = juego
  return (
    <div className='juegoListado'>
        <img src={thumbnail} className="imagenListado" />
        <div className='descripcionListado'>
            <h2>{title}</h2>
            <h3>{genre}</h3>
        </div>
        <div className='color-change-5x divBoton'>
            <button className='botonListado'>Ver Juego</button>
        </div>
    </div>
  )
}
