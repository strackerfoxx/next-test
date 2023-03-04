import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Paginacion() {
    const pagina = parseInt(useRouter().asPath.split("=")[1])
    
  return (
    <div className='paginacion'>
        {pagina && pagina > 1 ? (
            <>
                <Link href={`/?games=${pagina - 1}`} >{"<"}</Link>
                <Link href={`/?games=${pagina + 1}`} className='pagina' >{pagina + 1}</Link>
                <Link href={`/?games=${pagina + 2}`} className='pagina' >{pagina + 2}</Link>
                <Link href={`/?games=${pagina + 3}`} className='pagina' >{pagina + 3}</Link>
            </>
        ): (
            <>
                <Link href="/?games=2" className='pagina' >2</Link>
                <Link href="/?games=3" className='pagina' >3</Link>
                <Link href="/?games=4" className='pagina' >4</Link>
                <Link href={`/?games=2`} >{">"}</Link>
            </>
        )}
        {pagina && pagina > 1 ? (
            <Link href={`/?games=${pagina + 1}`} >{">"}</Link>
        ): ""}
    </div>
  )
}
