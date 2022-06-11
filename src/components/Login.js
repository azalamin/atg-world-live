import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import login from '../assets/login.png';
import "./Login.css";

const Login = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setLgShow(true)}>
        Login
      </button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header className="" closeButton>
          <p className="modal-top text-center">
            <small className="text-success">
              Let's learn, share & inspire each other with our passion for
              computer engineering. Sign up now 🤘🏼
            </small>
          </p>
        </Modal.Header>
        <Modal.Body>
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card border-0">
                <div class="row g-0 align-items-center">
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <span class="h1 fw-bold mb-0">Sing In</span>
                        </div>
                        <div class="form-outline">
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            placeholder="Email"
                          />
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-primary btn-lg btn-block w-100 submit-btn"
                            type="button"
                          >
                            Sign In
                          </button>
                        </div>
                        {/* Social Login */}
                        <div class="pt-1 mb-4">
                          <button
                            class="btn social-login btn-lg mb-2 btn-block w-100"
                            type="button"
                          >
                            Sign in with Facebook
                          </button>
                          <button
                            class="btn social-login btn-lg mb-2 btn-block w-100"
                            type="button"
                          >
                            Sign in with Google
                          </button>
                        </div>
                        <div>
                          <p style={{cursor: 'pointer'}} className="text-center">Forget Password</p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <p>
                      <small>
                        Don't have an account yet?{" "}
                        <span className="text-primary">Create Now</span>
                      </small>
                    </p>
                    <img src={login} alt="login form" class="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
