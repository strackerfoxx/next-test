import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
export default function HeaderPortada() {
  return (
    <div>
        <div className='portada'>
          <Link href="/">
            <div className="divLogo">
                <Image width={100} height={100} src="/img/logo.png" alt="Logo de la nasa" className='logo'/>
            </div>
          </Link>
          <h1 className='titulo text-pop-up-top'>Free to Play Games</h1>
          <div  className='boton-container'>
          </div>
        </div>
        <div className='botonera'>
          <h3 className='hvr-horizon' >Platform</h3>
          <h3 className='hvr-horizon' >Genre</h3>
          <h3 className='hvr-horizon' >Categories</h3>
          <h3 className='hvr-horizon' >About us</h3>
        </div>
    </div>
  )
}
