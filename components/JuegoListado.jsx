import React from 'react'
import Image from 'next/image'

export default function JuegoListado({juego}) {
    const {id, title, thumbnail, genre} = juego
  return (
    <div className='juegoListado'>
        <Image width={1000} height={200} src={thumbnail} alt={`imagen de: ${title}`} className="imagenListado" />
        <div className='descripcionListado'>
            <h2>{title}</h2>
            <h3>{genre}</h3>
        </div>
        <div className='color-change-5x divBoton'>
        <a href={`/game/${id}`}><button className='botonListado'>Ver Juego</button></a>
        </div>
    </div>
  )
}
