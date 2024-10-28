"use client";
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ClientRouter from "../components/ClientRouter";
import MainPage from "./views/user/main_page";
import ListadoMarcas from "./views/user/listado_marcas";
import Detalles from "./views/user/details";
import Navbar from "./views/common/navbar";
import MisionVision from "./views/user/mision_vision";
import Footer from "./views/common/footer";

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Details/:id" element={<Detalles />} />
      </Routes>
      
      {/* Mostrar ListadoMarcas y MisionVision solo si no estamos en la vista de detalles */}
      {location.pathname !== "/Details" && !location.pathname.startsWith("/Details/") && (
        <>
          <ListadoMarcas />
          <MisionVision />
        </>
      )}
    </>
  );
}

export default function Home() {
  // Usar useEffect para asegurarse de que el código del cliente se ejecute solo en el lado del cliente.
  useEffect(() => {
    // Aquí puedes realizar cualquier lógica que dependa del objeto 'document'
  }, []);

  return (
    <ClientRouter>
      <Navbar />
      <MainContent />
      <Footer />
    </ClientRouter>
  );
}
