import './App.css';
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function Escrever() {

  const [texto, alteratexto] = useState('')

  const modificatexto = (evento) => {
    if(evento.target.value.length <= 300){
    alteratexto(evento.target.value)}
  }

   async function postamensagem() {

    var d = new Date();
    var months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    var data = d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear()

    var post = JSON.stringify(
      { 
        "usuario" : "felipenick",
        "post": texto,
        "data": data
      })
    
  
    var metodo = { 
                    method: 'PUT',
                    body: post
                   }

    console.log(metodo)

    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc`, metodo)

    console.log(resultado)
  
  }

  return (
    <div className='postagem'>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>O que você está pensando?</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={modificatexto} value={texto} />
        </Form.Group>
      </Form>
      Caracteres restantes {300 - texto.length}
      <div className='botao'>
      <Button variant="primary" type="submit" onClick={postamensagem}>
      Postar
      </Button>
      </div>
    </div>
  );
}

export default Escrever;
