import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import "./NavBar.css";

const NavBar = () => {
  const { SetToken } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    SetToken("");
    navigate("/");
  };
  return location.pathname === "/" ? (
    <></>
  ) : (
    <>
      <nav class="navbar navbar-expand-lg  p-3 ">
        <div class="container-fluid ">
          <div className="navbar-brand me-auto">
            <Link to="/ordenes">
              <img
                className="img-logo"
                src="https://www.widex.com.ar/img/widex-dark-gray-logo.png"
                alt="ogo-widex"
              />
            </Link>
          </div>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <Link to="/ordenes">
                <img
                  className="logo-w"
                  src="https://www.widex.com.ar/img/widex-dark-gray-logo.png"
                  alt="ogo-widex"
                  id="offcanvasNavbarLabel"
                />
              </Link>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 ">
                <li class="nav-item">
                  <Link className="nav-link" to="/ordenes">
                    Ordenes
                  </Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" to="/stock">
                    Stock
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link className="logout-button" to="/" onClick={Logout}>
            Logout
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
