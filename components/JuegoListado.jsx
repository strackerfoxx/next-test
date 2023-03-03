import React from 'react'
import Image from 'next/image'

export default function JuegoListado({juego}) {
    const {id, title, thumbnail, genre} = juego
  return (
    <div className='juegoListado'>
        <img src={thumbnail} className="imagenListado" />
        <div className='descripcionListado'>
            <h2>{title}</h2>
            <h3>{genre}</h3>
        </div>
        <div className='color-change-5x divBoton'>
        <a href={`/Game/${id}`}><button className='botonListado'>Ver Juego</button></a>
        </div>
    </div>
  )
}
