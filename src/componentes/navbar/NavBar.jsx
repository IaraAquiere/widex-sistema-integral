import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import logo from "../../assets/imagenes/widex-logo-solo.png";
import logo2 from "../../assets/imagenes/widex-dark-gray-logo.png";
import "./NavBar.css";
const NavBar = () => {
  const { SetToken, rol, nombre } = useStore();
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
              <img className="logo-w" src={logo} alt="logo" />
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
                  alt="logo"
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
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/ordenes">
                    Ordenes
                  </Link>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <Link className="nav-link" to="/stock">
                    Stock
                  </Link>
                </li>

                {rol.nombre_rol == "ADMIN" ? (
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Menu Administrador
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="nav-link-dropdown" to="/cambiorol">
                          Roles
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <Link className="nav-link-dropdown" to="/listausuarios">
                          Lista Usuarios
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <></>
                )}
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {nombre}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <Link className="nav-link-dropdown" to="/micuenta">
                        Mi Cuenta
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <Link
                        className="nav-link-dropdown"
                        to="/"
                        onClick={Logout}
                      >
                        Cerrar sesion
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
