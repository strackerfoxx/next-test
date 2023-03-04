import axios from "axios"
import JuegoListado from "@/components/JuegoListado"
import { useRouter } from "next/router"
import Paginacion from "@/components/Paginacion"

import Layout from "@/components/Layout"
export default function Home({data}) {
  const pagina = parseInt(useRouter().asPath.split("=")[1])
  var juegos = []
  
  data?.map(juego => {
    if(pagina){
      if(juego.id <= pagina * 30 && juego.id >= (pagina - 1) * 30){
       juegos = [...juegos, juego]
      }else{
        return
      }
    }else{
      if(juego.id <= 30 && juego.id >= 1){
        juegos = [...juegos, juego]
       }else{
         return
       }
    }
  })
  return (
    <Layout>
      <div className="juegosGrid">
        {juegos.map(juego => (
          <JuegoListado key={juego.id} juego={juego} />
        ))}
      </div>
      < Paginacion pagina={pagina} />
    </Layout>
  )
}

export async function getStaticProps(){
  const {data} = await axios("https://www.freetogame.com/api/games")
  return{
    props: {
      data
    }
  }
}