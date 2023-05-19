import './Menu.css'

export function Menu() {
  return (
    <>
      <section>
        <div className="container">
          <nav className="navbar navbar-expand-lg menu  mt-5 mx-5 bg-light rounded-3">
            <div className="container-fluid">

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="navbar-brand position-sticky" href="#"><img src="https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/solologo.png?alt=media&token=e0d688aa-0e7a-4210-b392-c3e1917d5ed6" alt="logo" style={{ width: "20%", height: "20%" }} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>

    </>
  )
}
