import './Empleados.css'
import { Rutas } from '../Rutas/Rutas';

export function Empleados() {
    let serviciosEmpleados = [
        {
            nombre: "Fernada",
            cargo: "Gerente",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado1.jpg?alt=media&token=c10530a2-803f-4c08-ae03-333d7107b7df",
            contacto: 3126546456
        },
        {
            nombre: "Eric",
            cargo: "Veterinario Jefe",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado2.jpg?alt=media&token=e0c7d94f-3046-4b20-92c6-2766e521a1a1",
            contacto: 3236234456
        },
        {
            nombre: "Maria",
            cargo: "Asistente Veterinaria",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado3.jpg?alt=media&token=2b2ec192-55b0-45f3-b4c4-48ea408523f3",
            contacto: 3126546456
        },
        {
            nombre: "Alex",
            cargo: "Asesor Callcenter",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado4.jpg?alt=media&token=d3dd2330-b493-44ee-b8ff-b7f82ef35cf8",
            contacto: 3422850012
        },
        {
            nombre: "Soledad",
            cargo: "Ventas",
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/empleados%2Fempleado5.jpg?alt=media&token=53b73be4-b32d-4a45-b51e-834c1ef2856d",
            contacto: 3422850012
        }
    ]
    return (
        <>

            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        serviciosEmpleados.map(function (servicio) {
                            return (
                                <div className="col">
                                    <div className="card h-100 shadow text-center">
                                        <h1 className='name'>{servicio.nombre}</h1>
                                        <br />
                                        <h1>{servicio.cargo}</h1>
                                        <img src={servicio.foto}
                                            alt="empleadoX"
                                            className="img-fluid w-100" />
                                        <p>Contacto: {servicio.contacto}</p>
                                        
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}