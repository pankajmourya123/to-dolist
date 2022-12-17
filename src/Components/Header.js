import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
  } from "react-bootstrap";
  import { Link} from "react-router-dom";
  import Advance from "./Advance";
  
  function Header() {
    
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                
                
                   
                   <Nav>
                <NavDropdown title={Advance}>
                  <NavDropdown.Item as={Link} to="/advance">
                  All Todos</NavDropdown.Item>
                
                </NavDropdown>
              </Nav>
              <Nav.Link as={Link} to="/">
                      Home
                    </Nav.Link>
                   
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
  export default Header;
  