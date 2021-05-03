import './App.css';
import { Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Redirect, Route, useHistory } from "react-router-dom";


function Login() {

  const [usuario_, alterausuario] = useState('')
  const [senha_, alterasenha] = useState('')
  const [progresso, atualizaprogress] = useState(false)
  const [status, atualizastatus] = useState(200)
  const history = useHistory();

  const atualizauser = (evento) => {
    alterausuario(evento.target.value)
    atualizastatus(200)
  }

  const atualizasenha = (evento) => {
    alterasenha(evento.target.value)
    atualizastatus(200)
  }

  async function executalogin() {

    atualizaprogress(true)
    var params = JSON.stringify(
      {
        "usuario": usuario_,
        "senha": senha_
      })

    var metodo = {
      method: 'POST',
      body: params
    }

    const resultado = await fetch(`https://j0rjodfah4.execute-api.us-east-1.amazonaws.com/backend-redesocial-lc/login`, metodo)

    atualizaprogress(false)
    atualizastatus(resultado.status)

    if(resultado.status == 200) {
      localStorage.setItem('redesocial', usuario_)
      history.push('/timeline')
    }

  }

  return (

    <div className='box-senha'>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Usuário</Form.Label>
          <Form.Control onChange={atualizauser} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control onChange={atualizasenha} type="password" />
        </Form.Group>
        <Button onClick={executalogin} variant="primary">
          Logar
        </Button>
        {progresso && 
        <Alert className='alerta-senha' variant="warning">
         Aguarde ...
        </Alert>}
        {status != 200 && 
        <Alert className='alerta-senha' variant="danger">
         Usuário ou Senha inválidos.
        </Alert>}
      </Form>
    </div>
  );
}

export default Login;
