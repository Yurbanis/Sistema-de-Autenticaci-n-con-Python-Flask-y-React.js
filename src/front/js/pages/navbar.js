import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const MainNavbar = (props) => {
  const logout = () => {
    console.log("entre a la funcion logout");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    window.location.href = "/";
  };

  const location = useLocation();


 
  return (
    <>
   
      <ul className="nav mb-3">
        <div className="d-inline-flex justify-content-end flex-grow-1">
        {localStorage.getItem("user") && (
          <p className="bienvenido">
           {localStorage.getItem("user")}
          </p>
        )}
          <li className="nav-item dropdown py-3 ">
            <a
              className="nav-link"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user text-light"></i>
            </a>
            <ul className="dropdown-menu ">
              {!localStorage.getItem("user") && (
                <Link className="dropdown-item" href="#" to="/">
                  Iniciar Sesión
                </Link>
              )}
              {!localStorage.getItem("user") && (
                <Link className="dropdown-item" href="#" to="/signup">
                  Registrarse
                </Link>
              )}
             
              {localStorage.getItem("user") && (
                <li className="dropdown-item" href="#" onClick={logout}>
                  Cerrar Sesión
                </li>
              )}
            </ul>
          </li>
        </div>
        
      </ul>
      <Outlet />
    </>
  );
};

export default MainNavbar;