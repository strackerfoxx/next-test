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
      short_description,
      status,
      thumbnail,
      platform
    } = juego
  return (
    <Layout>
        <Head>
          <title>{`${title} - Free-to-Play-Games`}</title> 
          <meta name="description" content={`Gaming Games free to play free games - ${short_description}`} /> 
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
         <div className='descripcion'>
            <h4>{description}</h4>
         </div>
         <div className='requisitos'>
            {minReq.graphics && (
              <div>
                  <h2>Requisitos Minimos</h2>
                  <h4>graficos: <span className='requisito'>{minReq.graphics}</span></h4>
                  <h4>memoria: <span className='requisito'>{minReq.memory}</span></h4>
                  <h4>os: <span className='requisito'>{minReq.os}</span></h4>
                  <h4>procesador: <span className='requisito'>{minReq.processor}</span></h4>
                  <h4>almacenamiento: <span className='requisito'>{minReq.storage}</span></h4>
              </div>
            )}
         </div>
        
    </Layout>
  )
}
