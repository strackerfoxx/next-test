import {useState} from "react"
import axios from "axios"
import JuegoListado from "@/components/JuegoListado"

import Layout from "@/components/Layout"
export default function Home({data}) {
  var juegos = []
  data?.map(juego => {
    if(juego.id <= 30){
     juegos = [...juegos, juego]
    }else{
      return
    }
  })
  return (
    <Layout>
      <div className="juegosGrid">
        {juegos.map(juego => (
          <JuegoListado key={juego.id} juego={juego} />
        ))}
      </div>
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