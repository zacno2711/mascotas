import { Rutas } from "../Rutas/Rutas";


export function Tienda() {
    let serviciosTienda = [
        {
            nombre: "Cuido Purina Pro Plan",
            precio: 150000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(1).png?alt=media&token=530446a6-ecd6-45fd-bd9f-4c215282f5d9",
            
        },
        {
            nombre: "Cuido Science Diet",
            precio: 135000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(2).png?alt=media&token=b6a7f93c-8b12-4a8c-b333-5e5fe4b5c84f",
            
        },
        {
            nombre: "Cuido True Nature",
            precio: 125000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(3).png?alt=media&token=d77be9f7-45e7-4c15-a952-3e16628b5138",
            
        },
        {
            nombre: "Alimento para Gato BROCAT",
            precio: 112000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(4).png?alt=media&token=f378ca5d-fde9-4790-8d3d-a2d4a74f4be3",
            
        },
        {
            nombre: "Juguete 3 baloncitos",
            precio: 108000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(5).png?alt=media&token=05b071c4-710e-487f-bbcb-7761c51d5b0b",
            
        },
        {
            nombre: "Juguete Kong Airdog",
            precio: 142000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(6).png?alt=media&token=5a7f1dd2-6705-41d8-b7cf-fec252b9ca3a",
            
        },
        {
            nombre: "Arena Freemiau",
            precio: 114000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(7).png?alt=media&token=06b928ff-ed25-46f7-8598-f298ff4a9048",
            
        },
        {
            nombre: "Juguete de Bolas",
            precio: 52000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(8).png?alt=media&token=993ef156-453b-4412-8573-bd11b1eeb93b   ",
            
        },
        {
            nombre: "Flurry Blue Label",
            precio: 142000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(11).png?alt=media&token=9fc5f261-1326-49af-b302-0481c49b75c3",
            
        },
        {
            nombre: "Arena Foficat",
            precio: 166000,
            foto: "https://firebasestorage.googleapis.com/v0/b/mascotas-93570.appspot.com/o/productos%2Fimage-removebg-preview%20(10).png?alt=media&token=597c14da-934c-428a-82be-e2acff5551a0",
            
        },
        
    ]
    return (
        <>

            <div className="container mt-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        serviciosTienda.map(function (servicio) {
                            return (
                                <div className="col">
                                    <div className="card h-100 shadow text-center">
                                        <h1 className='name'>{servicio.nombre}</h1>
                                        <br />
                                        <h1>{servicio.precio} COP $</h1>
                                        <img src={servicio.foto}
                                            alt="productox"
                                            className="img-fluid w-100" />
                                        
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