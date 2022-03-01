import { Nav, Container, Navbar } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          Foodie 🍲
        </Navbar.Brand>
        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="text-light mx-lg-5">
                Home
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
