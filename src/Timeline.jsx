import './App.css';
import Postagem from './Postagem';
import { useState, useEffect } from 'react';
import MainLogado from './MainLogado';
import Escrever from './Escrever';

function Timeline(props) {

  const [dados, recebedados] = useState([])
  const [usuario, alterausuario] = useState()

  if (usuario != props.usuario){
    console.log(props.usuario)
    alterausuario(props.usuario)
  } 
  
  async function verifica_tweets(){

    
    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc`)
    var data =  await resultado.json()

    if(props.usuario){
       var posts_filtrados = data.filter(function(postagem){
         console.log(postagem.usuario)
          return (postagem.usuario == props.usuario)
      })
      return posts_filtrados
    }

    else {
      return data
    }

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
