// components/ClientRouter.jsx
"use client"; // Esto asegura que el componente se ejecute solo en el cliente

import { BrowserRouter } from "react-router-dom";

export default function ClientRouter({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
