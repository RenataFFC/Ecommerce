import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top py-3 shadow-sm">
      <div className="container justify-content-center">
        <NavLink className="navbar-brand fw-bold fs-4" to="/">CosmétiK Prime </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Produtos
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/about">
                Sobre
                </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
                Contato
                </NavLink>
            </li>
          </ul>
          <div className="buttons">
            <a href="" className="btn btn-outline-dark">
              <i className="fa fa-sign-in me-1"></i>Login</a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-user-plus me-1"></i>Registro</a>
            <a href="" className="btn btn-outline-dark ms-2">
              <i className="fa fa-shopping-cart me-1"></i>Carrinho (0)</a>
          </div>

        </div>
      </div>
    </nav>
  );
}
export default Navbar;

