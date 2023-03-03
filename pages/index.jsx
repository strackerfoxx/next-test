import axios from "axios"
import JuegoListado from "@/components/JuegoListado"

import Layout from "@/components/Layout"
export default function Home({juegos}) {
  return (
    <Layout>
      <div className="juegosGrid">
        {juegos.map(juego => (
          <JuegoListado juego={juego} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps(){
  const {data: juegos} = await axios("https://www.freetogame.com/api/games")
  return{
    props: {
      juegos
    }
  }
}