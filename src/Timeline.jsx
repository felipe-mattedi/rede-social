import './App.css';
import Postagem from './Postagem';
import { useState, useEffect } from 'react';

function Timeline(props) {

  const [dados, recebedados] = useState([])

  async function verifica_tweets(){

    var myHeaders = new Headers();
    myHeaders.append("Access-Control-Allow-Origin", "https://master.d2xi5qs55mh3wx.amplifyapp.com/");
    var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };
    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc`,myInit)
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
