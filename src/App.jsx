import React, { useState } from 'react';
import './index.css';
import Card from './Card';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState(false);
  const [showCard, setShowCard] = useState(false);


  const handleSubmit = (e) => {
  e.preventDefault();
  setError(false);

  if (nombre.length < 3 || nombre.trim().startsWith(' ')) {
    setError(true);
    return;
  }

  if (apellido.length < 6) {
    setError(true);
    return;
  }

  // Si las validaciones son correctas, mostrar el componente Card
  console.log('Formulario enviado correctamente');
  setShowCard(true);
};


  return (
    <div className="App">
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre de Jugador:</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="servidor">Servidor:</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error">Por favor chequea que la información sea correcta</p>}
     {nombre && apellido && !error && showCard && <Card nombre={nombre} apellido={apellido} />}
    </div>
  );
}

export default App;
