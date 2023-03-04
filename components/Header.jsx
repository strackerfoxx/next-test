import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='header'>
      <div className='barra'>
          <div className='logo'>
            <Link href='/'><Image src='/img/logo.png' alt="Logo de la tienda" width={100} height={100} /></Link> 
          </div>
          <div className='navegacion'>
              <Link href='/' >Platform</Link>
              <Link href='/' >Genre</Link>
              <Link href='/' >Categories</Link>
              <Link href='/us' >about us</Link>
          </div>
      </div>
    </div>
  )
}