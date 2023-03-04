import React from 'react'
import Layout from './Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Game({juego}) {
    const {
      title, 
      description, 
      developer, 
      game_url: url, 
      genre, 
      minimum_system_requirements: minReq,
      publisher,
      release_date,
      screenshots,
      short_description,
      status,
      thumbnail
    } = juego
  return (
    <Layout>
        <Head>
          <title>{`${title} - Free-to-Play-Games`}</title> 
          <meta name="description" content={`${short_description}`} /> 
        </Head>
        <div className='contenedor producto full'>
            <Image width={1000}  height={1000} src={thumbnail} alt={`imagen de: ${title}`} className='imagen'/>
            <div>
               <h1 className='heading title'>{title}</h1>
               <h2 className='heading'>Genero: {genre}</h2>
               <h2 className='heading'>Desarrollado por: {developer}</h2>
                  <Link href={url}><button  className='verJuego'>Descargar Juego</button></Link>
            </div>
         </div>
         
    </Layout>
  )
}
