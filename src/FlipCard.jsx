import React, { useState } from 'react';
import './FlipCard.css'; // Estilos CSS
import './Responsive.css'; // Estilos CSS
import imgDecoration1 from './assets/decoracion-1.svg'; // Importa la imagen
import imgDecoration2 from './assets/decoracion-2.svg'; // Importa la imagen
import imgDecoration3 from './assets/decoracion-3.svg'; // Importa la imagen
import imgDecoration4 from './assets/decoracion-4.svg'; // Importa la imagen

const FlipCard = () => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="flip-card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          {/* CARA FRONTAL */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
              <img src={imgDecoration1} alt="Imagen Superior" className="front-img-top" />
                <div className="front-text">
                  <hr className="line-top" />
                  <span className="text-line">Cumpleaños y Graduación</span>
                  <p className="sub-text">
                    PORQUE LOS LOGROS Y LA VIDA SE DISFRUTAN MÁS RODEADO DE PERSONAS ESPECIALES COMO TÚ.
                  </p>
                  <hr className="line-bottom" />
                </div>
                <img src={imgDecoration1} alt="Imagen Inferior" className="front-img-bottom" />
              </div>
            </div>
          </div>
        </div>

        <div className="flip-card-back">
          {/* Esquinas con imágenes */}
          <img src={imgDecoration2} alt="Esquina Superior Izquierda" className="corner corner-top-left" />
          <img src={imgDecoration2}  alt="Esquina Superior Derecha" className="corner corner-top-right" />
          <img src={imgDecoration2}  alt="Esquina Inferior Izquierda" className="corner corner-bottom-left" />
          <img src={imgDecoration2}  alt="Esquina Inferior Derecha" className="corner corner-bottom-right" />

          {/* Líneas horizontales y verticales */}
          <div className="line-horizontal line-top"></div>
          <div className="line-horizontal line-bottom"></div>
          <div className="line-vertical line-left"></div>
          <div className="line-vertical line-right"></div>

          {/* Contenedor central para la información */}
          <div className="info-container">
            {/* Sección de introducción */}
            <div className="introduction">
              <img src={imgDecoration3} alt="Imagen Superior" className="info-img-top" />
              <p className="info-text">SERÁ UN HONOR CONTAR CON TU PRESENCIA EN ESTE DÍA TAN IMPORTANTE PARA MÍ.</p>
              <div className="info-span-container">
                <span className="info-span">Carlos Enrique</span>
                <span className="info-span">Barriga Aguilar</span>
              </div>
              <p className="info-text">DESEO COMPARTIR ESTE MOMENTO INOLVIDABLE CONTIGO. TU PRESENCIA LE DARÁ UN SIGNIFICADO AÚN MÁS ESPECIAL A ESTA OCASIÓN.</p>
              <img src={imgDecoration3} alt="Imagen Inferior" className="info-img-bottom" />
            </div>

            {/* Sección de fecha */}
            <div className="date">
              <img src={imgDecoration4} alt="Imagen Izquierda" className="date-img-left" />
              <p className="date-text">16 Agosto, 2025</p>
              <img src={imgDecoration4} alt="Imagen Derecha" className="date-img-right" />
            </div>

            {/* Sección de itinerario */}
            <div className="itinerary">
              <h3 className="itinerary-title">Itinerario</h3>
              <p className="itinerary-item">FESTEJO: 2:00 PM – 8:00 PM</p>
              <p className="itinerary-item">MUSICA: 3:00 PM - 8:00 PM</p>
              <p className="itinerary-item">COMIDA: 3:30 PM - 5:00 PM</p>
              <p className="itinerary-item">COCTELES: 5:00 PM - 6:30 PM</p>
              <p className="itinerary-item">PASTEL Y CAFÉ: 6:00 PM - 8:00 PM</p>
            </div>

            {/* Sección de botones */}
            <div className="buttons">
              <button className="button-left">DIRECCIÓN</button>
              <button className="button-right">CONFIRMACIÓN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
