import React from 'react'
import axios from 'axios';
import Game from '@/components/Game';

export default function Juego({juego}) {
  return (
    <div>
        <Game juego={juego} />
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