import './App.css';
import { Card, CardImg } from 'react-bootstrap';

function Postagem(props) {

  var post = props.post

  return (
  <div className='postagem'>  
    <Card className='postagem-unica'>
      <Card.Body>
      <p>{post.post}</p>
      <p><b>{post.data} @{post.usuario}</b></p>
      <Card.Link href="#">Amei!</Card.Link> X
      </Card.Body>
    </Card>
  </div> 
  );
}

export default Postagem;
