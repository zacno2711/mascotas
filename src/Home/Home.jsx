import React from 'react';
import './Home.css';
import { Carrusel } from './Carrusel/Carrusel';

export function Home() {
    return (
        <>
            <Carrusel />
            <div className="container">
                <div className="content">
                    <h1>Bienvenido a nuestra página de inicio</h1>
                    <p>¡Gracias por visitarnos! En nuestra tienda de mascotas encontrarás todo lo que necesitas para cuidar y consentir a tus queridas mascotas. Contamos con una amplia variedad de productos de alta calidad, desde alimentos hasta juguetes y accesorios.</p>
                    <p>Explora nuestro catálogo, realiza tus compras y brinda a tus mascotas una vida llena de bienestar y felicidad. Estamos comprometidos con el cuidado de los animales y queremos ayudarte a proporcionarles el mejor cuidado posible.</p>
                    <p>Si tienes alguna pregunta o necesitas asesoramiento, nuestro equipo estará encantado de ayudarte. ¡Disfruta de tu visita y esperamos verte pronto en nuestra tienda de mascotas!</p>
                </div>
            </div>
        </>
    );
}