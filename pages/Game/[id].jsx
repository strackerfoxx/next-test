import React from 'react'
import axios from 'axios';

export default function Juego({juego}) {
    const {title} = juego
  return (
    <div>
        <h2>{title}</h2>
    </div>
  )
}

export async function getStaticProps({params: {id}}){
    const {data: juego} = await axios(`https://www.freetogame.com/api/game?id=${id}`)
    return{
        props: {
            juego
        }
    }
}
export async function getStaticPaths(){
    const {data} = await axios("https://www.freetogame.com/api/games")
    const paths = data?.map(juego => ({
        params: {
            id: juego.id.toString()
        }
    }));
    return{
        paths,
        fallback: false,
    }
}