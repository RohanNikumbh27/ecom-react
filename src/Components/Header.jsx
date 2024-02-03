// Header.jsx

import Button from 'react-bootstrap/Button';
import '../Styles/Header.css'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary"  >
      <div className='brand-name-a-div' style={{width: "100%"}}>
        <a href="#" className='brand-name-a'>Fukatghya</a>
        <Navbar.Toggle style={{ zIndex: "1000" }} className='navtog'/>
        <Navbar.Collapse id="navbarScroll">
          <div className='px-2 py-3' style={{ justifySelf: "flex-start" }}>
            <Nav
              className="px-2 pt-3 py-2 py-lg-0"
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/Components/About" className="nav-link">About</NavLink>
              <NavLink to="/Components/Contact" className="nav-link">Contact</NavLink>
            </Nav>
          </div>

          <div className='Searchform'>
            <Form className="d-flex my-3 mx-3 Searchform">
              <Form.Control
                name="query"
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" className='searchbtn'>Search</Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
