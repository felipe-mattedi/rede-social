import './App.css';
import Postagem from './Postagem';
import { useState, useEffect } from 'react';

function Timeline(props) {

  const [dados, recebedados] = useState([])

  async function verifica_tweets(){

    
    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc`)
    var data =  await resultado.json()
    return data
  }

  useEffect( async () => {
    recebedados(await verifica_tweets())  
  }
  ,[])

  return (
  <div>  
    {  
    dados.map(function(postagem){
    return <Postagem post={postagem}/>
    })}
  </div> 
  )
}


export default Timeline
