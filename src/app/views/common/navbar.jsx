export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fw-bold status-badge status-bar">
        <div className="container-fluid px-5">
          <a className="navbar-brand color-white" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active color-white" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="#Marcas">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="#mision">
                  Mision
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
