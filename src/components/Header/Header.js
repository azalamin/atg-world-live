import { Container, Nav, Navbar } from "react-bootstrap";
import { HiOutlineSearch } from "react-icons/hi";
import logo from "../../assets/logo.png";
import useUser from "../../hook/useUser";
import Login from "../Login";
import Signup from "../Signup";
import "./Header.css";

const Header = () => {
  const [user, setUser] = useUser();
  return (
    <Navbar collapseOnSelect expand="lg" className="d-none d-md-block">
      <Container>
        <Navbar.Brand className="d-none d-md-block" href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
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
                {user ? (
                  <>
                    <img
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                      }}
                      src={"https://i.ibb.co/w4d8N1M/personal-Image.jpg"}
                      alt=""
                    />{" "}
                    <span>Al Amin </span>
                  </>
                ) : (
                  <>
                    <span>Create Account.</span>
                    <span className="text-primary">It's free!</span>
                  </>
                )}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                {user ? (
                  <li className="ms-2 btn" onClick={() => setUser(false)}>
                    {" "}
                    Logout
                  </li>
                ) : (
                  <>
                    {" "}
                    <li>
                      <Signup />
                    </li>
                    <li>
                      <Login />
                    </li>
                  </>
                )}
              </ul>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
