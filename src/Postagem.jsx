import './App.css';
import { Card, CardImg } from 'react-bootstrap';

function Postagem(props) {

  var post = props.post

  async function atualizacurtida (){

    var post = JSON.stringify(
      { 
        "id" : post.id
      })
    
  
    var metodo = { 
                    method: 'PUT',
                    body: post
                   }

    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc/curtir`, metodo)

  }

  return (
  <div className='postagem'>  
    <Card className='postagem-unica'>
      <Card.Body>
      <p>{post.post}</p>
      <p><b>{post.data} @{post.usuario}</b></p>
      <Card.Link href="#" onClick={atualizacurtida}>Amei!</Card.Link> {post.curtidas}
      </Card.Body>
    </Card>
  </div> 
  );
}

export default Postagem;
