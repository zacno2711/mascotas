import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Menu } from "../Menu/Menu"
import { Agenda } from "../Agenda/Agenda"
import { Tienda } from "../Tienda/Tienda"
import { Empleados } from "../Empleados/Empleados"
import { Carrusel } from "../Home/Carrusel/Carrusel"
import { Historia } from "../Historia/Historia"


export function Rutas() {
  return (
    <>

    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/empleados" element={<Empleados />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/tienda" element={<Tienda />} />
      <Route path="/Historia" element={<Historia />} />

    </Routes>
    
    </>
   
  )
}