import React from 'react';
import './index.css';

function Card({ nombre, apellido }) {
  return (
       <div className="card">
      <h2>Nombre de Jugador: {nombre}</h2>
      <h2>Servidor elegido: {apellido}</h2>
    </div>
  );
}

export default Card;
