"use client";
import { useState } from "react";
import Add_element from "../admin/add_element"; // Importa el componente del formulario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function MainPage() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el buscador

  // Funciones para abrir y cerrar la modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="main-image">
        <div className="container col-md-12 d-flex flex-column gap-5 pt-5 z-3">
          <div className="Title-Container col-md-12 color-white">
            <h1 className="fw-bold status-badge Title-Piezas">Activafon</h1>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-md-12 col-sm-12 col-12">
              <p className="color-white">
                Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut.
                Carrot cake caramels pie sweet apple pie tiramisu carrot cake.
                Marzipan marshmallow croissant tootsie roll lollipop. Cupcake
                lemon drops bear claw gummies. Jelly bear claw gummi bears
                lollipop cotton candy gummi bears chocolate bar cake cookie.
                Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu
                pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake
                halvah sweet roll cotton candy croissant lollipop. Macaroon
                tiramisu chocolate bar candy candy carrot cake jelly sweet.
                Gummies croissant macaroon dessert. Chocolate cake dragée pie.
                Next level tbh everyday carry, blog copper mug forage kitsch roof
                party pickled hammock kale chips tofu. Etsy shoreditch 8-bit
                microdosing, XOXO viral butcher banh mi humblebrag listicle woke
                bicycle rights brunch before they sold out ramps. Twee shabby chic
                taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale
                chips typewriter kitsch 8-bit organic plaid small batch keffiyeh
                ethical banh mi narwhal echo park cronut.
              </p>
            </div>
          </div>

          {/* Buscador para piezas */}
          <div className="search-container mb-4">
            <input
              type="text"
              placeholder="Buscar pieza..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-control" // Clase de Bootstrap para el estilo
            />
          </div>

          {/* Galería de imágenes */}
          <div className="gallery-container">
            <h2 className="gallery-title">Galería de Productos</h2>
            <div className="gallery">
              <div className="gallery-item">Imagen 1</div>
              <div className="gallery-item">Imagen 2</div>
              <div className="gallery-item">Imagen 3</div>
              <div className="gallery-item">Imagen 4</div>
            </div>
          </div>

          {/* Sección de testimonios */}
          <div className="testimonials-container">
            <h2 className="testimonials-title">Testimonios</h2>
            <div className="testimonial">
              <p>"El servicio fue increíble y rápido. ¡Lo recomiendo!"</p>
              <span>- Cliente Satisfecho</span>
            </div>
            <div className="testimonial">
              <p>"Los mejores en reparaciones. ¡Gran trabajo!"</p>
              <span>- Cliente Feliz</span>
            </div>
          </div>

        </div>
        
        {/* Botón para abrir la modal */}
        <div className="d-flex justify-content-center mt-5">
          <button className="btn-add" onClick={openModal}>
            {/* Agregar Producto */}
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>

        {/* Modal */}
        {showModal && (
          <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Alta de Producto</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Aquí renderizamos el formulario */}
                  <Add_element />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
