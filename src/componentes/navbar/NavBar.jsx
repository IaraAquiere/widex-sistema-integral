import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import "./NavBar.css";
import logo from '../../assets/imagenes/widex-logo-solo.png';
import logo2 from "../../assets/imagenes/widex-dark-gray-logo.png";
const NavBar = () => {
  const { SetToken } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    SetToken("");
    localStorage.removeItem("miToken");
    navigate("/");
  };
  return location.pathname === "/" ? (
    <></>
  ) : (
    <>
      <nav className="navbar navbar-expand-lg  p-3 ">
        <div className="container-fluid ">
          <div className="navbar-brand me-auto">
            <Link to="/ordenes">
              <img
                className="logo-w"
                src={logo}
                alt="logo-widex"
              />
            </Link>
          </div>
          <div
            className="offcanvas offcanvas-end "
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <Link to="/ordenes">
                <img
                  className="logo-completo"
                  src={logo2}
                  alt="logo-widex"
                  id="offcanvasNavbarLabel"
                />
              </Link>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 ">
                <li className="nav-item">
                  <Link className="nav-link" to="/ordenes">
                    Ordenes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/stock">
                    Stock
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/permisos">
                    Permisos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cambiorol">
                    Cambiar Rol
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/micuenta">
                    Mi Cuenta
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link className="logout-button" to="/" onClick={Logout}>
            Cerrar sesion
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
