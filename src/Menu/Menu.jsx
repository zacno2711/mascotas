import './Menu.css'
import { Link } from "react-router-dom"
import { Carrusel } from '../Home/Carrusel/Carrusel'
export function Menu() {
  return (
    <>
      
        <div className="container">
          <nav className="navbar navbar-expand-lg menu  mt-5 mx-5 bg-light rounded-3">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="navbar-brand position-sticky" to="/">
                      <img src="https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/solologo.png?alt=media&token=e0d688aa-0e7a-4210-b392-c3e1917d5ed6" alt="logo" />
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/historia">Historia del negocio</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/empleados">Empleados</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/agenda">Agenda</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tienda">Tienda</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      
    </>
  )
}
