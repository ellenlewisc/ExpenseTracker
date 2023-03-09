import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { useContext} from "react"
import { AuthContext } from "../Context/AuthContext.js"

function NavigationBar() {
  const {currentUser, logout} = useContext(AuthContext)
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Link className="no-underline" to={"./"}><Navbar.Brand> Expense Tracker</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link></Link>
          </Nav>
          {currentUser ? < button className="mr-5" onClick={logout}> Logout</button> : <Link to='/login'>Login</Link>}
        </Navbar.Collapse>
        <span className="ml-auto mr-5">{currentUser?.email} </span>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;