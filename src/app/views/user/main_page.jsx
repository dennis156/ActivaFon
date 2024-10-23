import { useState } from "react";
import Add_element from "../admin/add_element"; // Importa el componente del formulario
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
export default function MainPage() {
  const [showModal, setShowModal] = useState(false);
  // Funciones para abrir y cerrar la modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
    <div className="main-image">
      <div className="container col-md-12 d-flex flex-column gap-5 pt-5">
        <div className="Title-Container col-md-12 color-white">
          <h1>Contenido Pagina principal</h1>
        </div>
        <div className="d-flex flex-wrap">
          <div className="col-md-6 col-sm-12 col-12">
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