import React from 'react';
import { useState, useEffect } from "react";
// import Swal from 'sweetalert2';
import { Rutas } from '../Rutas/Rutas';
import Swal from 'sweetalert2';
export function Agenda() {
    const [inputDia, setInputDia] = useState(null);
    const [inputHora, setInputHora] = useState(null);
    const [inputNombre, setInput] = useState(null);
    const [inputApellido, setInputApellido] = useState(null);
    const [inputCorreo, setInputCorreo] = useState(null);
    const [errores, setErrores] = useState({});

    const [envioDeFormulario, setEnvioDeFormulario] = useState(false);
    const [reservas, setReservas] = useState(null);
    const [carga, setCarga] = useState(true);


    useEffect(function(){
        if (Object.keys(errores).length==0){
            Swal.fire(
                'Servicio adquirido',
                'click me',
                'success'
            )
        }

        if (envioDeFormulario) {
            Swal.fire({
                icon: "error",
                title: "xd",
                text: "campos vacios"
            })
        }
    })

    function validarFormulario(evento) {
        evento.preventDefault()
        let listaErrores = []
        if (!inputNombre) {
            listaErrores.nombre = "El nombre esta vacio."
        }
        if (!inputApellido) {
            listaErrores.apellido = "El apellido esta vacio."
        }
        if (!inputCorreo) {
            listaErrores.correo = "El correo esta vacio."
        }
        if (!inputDia) {
            listaErrores.dia = "El dia esta vacio."
        }
        if (!inputHora) {
            listaErrores.hora = "El hora esta vacia."
        }
        setErrores(listaErrores);
        setEnvioDeFormulario(true);
    }


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>Formulario de Agendamiento</h1>
                <form onSubmit={validarFormulario}>
                    
                    <div className="form-group">
                        <label htmlFor="date" className="col-1 col-form-label">Dia:</label>
                        <div className="col-5">
                            <div className="input-group date" id="datepicker">
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="date"
                                    onChange={function(evento){setInputDia(evento.target.value)}}/>
                            </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <label htmlFor="date" className="col-1 col-form-label">Hora:</label>
                        <select 
                            defaultValue={"DEFAULT"}
                            className ="form-select" 
                            aria-label="Default select example"
                            onChange={function(evento){setInputHora(evento.target.value)}}>

                            <option selected>Seleccione la hora del servicio</option>
                            <option value="1">10 am</option>
                            <option value="2">1 pm</option>
                            <option value="3">5 pm</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombre">Nombre:</label>
                        <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            id="nombre" 
                            name="nombre"  
                            onChange={function(evento){setInputNombre(evento.target.value)}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="apellido">Apellido:</label>
                        <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            id="apellido" 
                            name="apellido"
                            onChange={function(evento){setInputApellido(evento.target.value)}}  />
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input 
                            type="email" 
                            className="form-control form-control-sm" 
                            id="correo" 
                            name="correo"
                            onChange={function(evento){setInputCorreo(evento.target.value)}}  />
                    </div>

                    <button type='submit' className='btn btn-primary w-100'>AGENDAR</button>
                </form>
            </div>
        </div>
    );
}

export default Agenda;
