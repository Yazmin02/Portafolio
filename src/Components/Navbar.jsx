import { Link } from 'react-scroll';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="text-pink">Mi Portafolio</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="about" smooth={true} duration={500} className="nav-link">
            INICIO
          </Nav.Link>
          <Nav.Link as={Link} to="projects" smooth={true} duration={500} className="nav-link">
            PROYECTOS
          </Nav.Link>
          <Nav.Link as={Link} to="contact" smooth={true} duration={500} className="nav-link">
            CONTACTO
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
