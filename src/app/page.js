"use client";

import Add_element from "./views/admin/add_element";
import FetchData from "./views/admin/fetch_data"
import MainPage from "./views/user/main_page";
import ListadoMarcas from "./views/user/listado_marcas";
import Navbar from "./views/common/navbar";
import MisionVision from "./views/user/mision_vision";

export default function Home() {

  return (
    <>
    <MainPage/>
    <ListadoMarcas/>
    <MisionVision/>
    </>
  );
}
