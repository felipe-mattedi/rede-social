import './App.css';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

import { Link, Route, BrowserRouter, Switch } from "react-router-dom";


import './App.css';



function MainLogado(props) {

  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

  async function enviafoto() {
    var metodo = { 
      method: 'PUT',
      body: selectedFile
     }

     const resultado = await fetch(`http://aws-fzm-tst-lc.s3.amazonaws.com/teste`, metodo)

  }

  return (
    <div className='cabecalho-logado'>
      <div className='ident-user'>
        <Card style={{ width: '18rem' }}>
          <Card.Body class = 'dados-acesso'>
            <Card.Title>@{props.usuario}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Usuário Logado</Card.Subtitle>
            <Image src="https://aws-fzm-tst-lc.s3.amazonaws.com/figuras/sol.PNG" roundedCircle width='40%'/>
            <Card.Link onClick={handleShow}>Alterar Foto</Card.Link>
            <Link to="/logout">Logout</Link>
          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alterar Foto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.File id="formcheck-api-regular">
        <Form.File.Input onChange={changeHandler}/>
       </Form.File>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={enviafoto}>
            Salvar Alterações
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
      <div className='barra-esquerda'>
        <Nav className='nav-bar' variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="link-0"><Link to="/timeline">Timeline</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><Link to="/my-posts">Minhas postagens</Link></Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
      </div>
  );
}

  export default MainLogado
