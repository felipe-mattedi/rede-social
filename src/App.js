import './App.css';
import { Card } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Escrever from './Escrever';
import Timeline from './Timeline';
import { Link, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="main-app">
      <div>
        <Card className='ident-user' style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>@felipenick</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Usuário Logado</Card.Subtitle>
            <Card.Link href="#">Logout</Card.Link>
            <Card.Link href="#">Alterar Foto</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div className='barra-esquerda'>
      <BrowserRouter>
        <Nav className='nav-bar' variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link eventKey="link-0"><Link to="/timeline">Timeline</Link></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1"><Link to="/my-posts">Minhas postagens</Link></Nav.Link>
          </Nav.Item>
        </Nav>
        <Escrever />
        <Route path="/timeline">
        <Timeline posts='timeline' />
        </Route>
        <Route path="/my-posts">
        <Timeline posts='myposts'/>
        </Route>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
