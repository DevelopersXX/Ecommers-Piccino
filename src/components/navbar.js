import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Logo from "./logo.png"

const NavBarMac = () => {
    return(
       <>    
       <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/" ><img
          alt=""
          src={Logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
        />{' '}
      Macentos</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                <Nav.Link as={Link} to="/about">Nosotros</Nav.Link>
                <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link>                
            </Nav>
            </Navbar.Collapse>
        </Container>
        <CartWidget />
        </Navbar>

        
        {/* <section>
            <Outlet></Outlet>
        </section> */}
       </> 
    )
}
export default NavBarMac