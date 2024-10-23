import { useState, useEffect } from "react";

function Listings() {
  const [listings, setListings] = useState([]); // Estado para los datos
  const [loading, setLoading] = useState(true); // Estado para mostrar spinner o carga
  const [error, setError] = useState(null); // Estado para errores

  useEffect(() => {
    // Llamada a la API al cargar el componente
    const fetchListings = async () => {
      try {
        const res = await fetch("/api/listings"); // Llamada al endpoint de la API en Vercel o local
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`); // Controla errores HTTP
        }
        const data = await res.json(); // Convierte la respuesta a JSON
        setListings(data); // Guarda los datos en el estado
      } catch (err) {
        setError(err.message); // Guarda el mensaje de error
      } finally {
        setLoading(false); // Detén la carga al finalizar
      }
    };

    fetchListings();
  }, []); // El array vacío asegura que la API se llame solo una vez

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="card-grid">
      {listings.map((listing) => (
        <div className="card" key={listing._id}>
          <img
            src={listing.images[0] || 'https://via.placeholder.com/400x300'}
            alt={listing.name}
            className="card-image"
          />
          <div className="card-content">
            <h2 className="card-title">{listing.part_name}</h2>
            <p className="card-summary"><b>Marca: {listing.brand.name}</b></p>
            <p className="card-summary"><b>Modelo: {listing.model.name}</b></p>
            <p className="card-summary">{listing.description}</p>
            <p className="card-summary"><b>Garantia: {listing.warranty}</b></p>
            <div className="card-div-button">
              <button className="card-button">Ver más</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listings;
