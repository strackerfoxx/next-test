import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
export default function HeaderPortada() {
  return (
    <div>
        <div className='portada'>
          <Link href="/">
            <div className="divLogo">
                <Image width={100} height={100} src="/img/logo.png" alt="Logo de la nasa" className='logoPortada'/>
            </div>
          </Link>
          <h1 className='titulo text-pop-up-top'>Free to Play Games</h1>
          <div  className='boton-container'>
          </div>
        </div>
        <div className='botonera'>
          <h3 className='hvr-horizon' ><Link href="/">Platform</Link></h3>
          <h3 className='hvr-horizon' ><Link href="/">Genre</Link></h3>
          <h3 className='hvr-horizon' ><Link href="/">Categories</Link></h3>
          <h3 className='hvr-horizon' ><Link href="us">About us</Link></h3>
        </div>
    </div>
  )
}
