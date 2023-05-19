import React from 'react'
import ReactDOM from 'react-dom/client'
import {Menu} from './Menu/Menu'
import {Carrusel} from './Carrusel/Carrusel'
import { Header } from './Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Menu></Menu>
    <Carrusel></Carrusel>
  </React.StrictMode>,
)
