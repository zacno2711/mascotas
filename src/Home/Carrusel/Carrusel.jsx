import { Rutas } from "../../Rutas/Rutas"

export function Carrusel() {
    return (
        <div className="container">
            <div className="row">
                <div id="carouselExampleFade" className="carousel slide carousel-fade Carrusel w-100 mt-1 mx-auto" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/img_ba%C3%B1o.jpg?alt=media&token=c004b877-a037-4d1e-b60a-b3c389259f42" className="d-block w-100" alt="img_baño" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/img_guarderia.jpg?alt=media&token=55638668-9e9b-4bd6-a246-8b8966884ef4" className="d-block w-100" alt="img-guarderia" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/img_veterinaria.jpg?alt=media&token=98807846-9262-434b-a4cb-0d483bd022b2" className="d-block w-100" alt="img_veterinaria" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </div>
    )
}
