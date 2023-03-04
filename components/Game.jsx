import React from 'react'
import Layout from './Layout'

export default function Game({juego}) {
    const {title} = juego
  return (
    <Layout>
        <h3>{title}</h3>
    </Layout>
  )
}
