import React from 'react'
import Layout from './Layout'
import Head from 'next/head'

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
          <meta name="description" content={`Gaming Games free to play free games - ${short_description}`} /> 
        </Head>
        <h3>{title}</h3>
    </Layout>
  )
}
