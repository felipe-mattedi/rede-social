import './App.css';
import { Form, Button } from 'react-bootstrap';

function Escrever() {
  return (
    <div className='postagem'>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>O que você está pensando?</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div className='botao'>
      <Button variant="primary" type="submit">
      Postar
      </Button>
      </div>
    </div>
  );
}

export default Escrever;
