import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../../store/UseStore";
import "./NavBar.css";


const NavBar = () => {
  const { SetToken, token } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  const Logout = () => {
    SetToken("");
    navigate("/");
  };
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar scroll</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li class="nav-item">
          <Link to="/stock"> stock</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <Link to="/" onClick={Logout}>
            Logout
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};

export default NavBar;
