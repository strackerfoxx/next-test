import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className='headerPadding'>
        <div className='header'>
            <div>
            <Link href='/'><Image src='/img/logo.png' alt="Logo de la tienda" width={100} height={100} /></Link> 
            </div>
            <div className='navegacion'>
                <Link href="/" className='link'>Platform</Link>
                <Link href="/" className='link'>Genre</Link>
                <Link href="/" className='link'>Categories</Link>
                <Link href="/us" className='link'>Us</Link>
            </div>
        </div>
    </div>
  )
}