import React from 'react'
import HeaderPortada from './HeaderPortada'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { useRouter } from "next/router"
export default function Layout({children}) {
  return (
    <div>
        <Head>
          <title>Free-to-Play-Games</title>
          <meta name="description" content="Gaming Games free to play free games" />
        </Head>
        {useRouter().pathname == "/" ? (
          <HeaderPortada/>
        ): (
          <Header/>
        )}
          <div className='body'>
            {children}
          </div>
        <Footer/>
    </div>
  )
}
