import React from 'react'
import HeaderPortada from './HeaderPortada'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from "next/router"
export default function Layout({children}) {
  console.log(useRouter().pathname)
  return (
    <div>
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
