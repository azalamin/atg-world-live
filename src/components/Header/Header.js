import { Container, Nav, Navbar } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100">
            <div className="w-50 mx-auto position-relative">
              <HiOutlineSearch className="icon" />
              <input
                type="text"
                class="w-100 search-box"
                id="exampleFormControlInput1"
                placeholder="Search for your favorite groups in ATG "
              />
            </div>
          </Nav>
          <Nav>
            <div class="dropdown">
              <button
                class="dropdown-toggle border-0 bg-white fw-bold"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>Create Account.</span>
                <span className="text-primary">It's free!</span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li>
                  <button class="dropdown-item" type="button">
                    Sign Up
                  </button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">
                    Login
                  </button>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
