import React from 'react'
import HeaderPortada from './HeaderPortada'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <div>
        <HeaderPortada/>
          {children}
        <Footer/>
    </div>
  )
}
