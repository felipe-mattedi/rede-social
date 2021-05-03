import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from 'react-bootstrap';
import { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartR} from '@fortawesome/free-regular-svg-icons'

function Postagem(props) {

  var post = props.post
  const [coracao, atualizacoracao] = useState(false)
  const [curtidas, atualizacurtidas] = useState(post.curtidas)

  function solidheart(){
    atualizacoracao(true)
  }

  function heart(){
    atualizacoracao(false)

  }

  async function atualizacurtida (){

    var params = JSON.stringify(
      { 
        "id" : post.id
      })
    
  
    var metodo = { 
                    method: 'PUT',
                    body: params
                   }

    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc/curtir`, metodo)

    atualizacurtidas(curtidas+1)

  }

  return (
  <div className='postagem'>  
    <Card className='postagem-unica'>
      <Card.Body>
      <p>{post.post}</p>
      <p><b>{post.data} @{post.usuario}</b></p>
      <Card.Link><FontAwesomeIcon id='4'  onMouseEnter={solidheart} onMouseLeave={heart} icon={coracao ? faHeart: faHeartR} size='1x' onClick={atualizacurtida}/></Card.Link> {curtidas}
      </Card.Body>
    </Card>
  </div> 
  );
}

export default Postagem;
