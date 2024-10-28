"use client"
import { useState,useEffect } from "react";
import "../../assets/css/navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 80); // Cambia a true cuando se desplaza más de 200px
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
    <nav className={`navbar navbar-expand-lg fw-bold status-badge status-bar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container-fluid px-5">
          <a className="navbar-brand color-white" href="#">
            Activafon
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
                <a className="nav-link active color-white" aria-current="page" href="http://localhost:3000/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="http://localhost:3000/#Marcas">
                  Marcas
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="http://localhost:3000/#mision">
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
