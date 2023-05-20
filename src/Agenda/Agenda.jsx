import React from 'react';
import { Rutas } from '../Rutas/Rutas';
export function Agenda() {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div>
                <h1>Formulario de Agendamiento</h1>
                <form action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="dia">Día:</label>
                        <input type="text" className="form-control form-control-sm" id="dia" name="dia" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hora">Hora:</label>
                        <input type="text" className="form-control form-control-sm" id="hora" name="hora" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nombres">Nombres:</label>
                        <input type="text" className="form-control form-control-sm" id="nombres" name="nombres" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" className="form-control form-control-sm" id="correo" name="correo" required />
                    </div>

                    <input type="submit" value="Enviar" className="btn btn-primary" style={{ marginTop: '10px' }} />
                </form>
            </div>
        </div>
    );
}

export default Agenda;
