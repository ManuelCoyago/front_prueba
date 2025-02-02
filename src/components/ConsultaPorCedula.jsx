import React, { useState } from 'react';
import api from '../api/donantes';

const ConsultarPorCedula = () => {
  const [cedula, setCedula] = useState('');
  const [donante, setDonante] = useState(null);

  // Opciones para el tipo de sangre
  const tiposSangre = [
    { valor: 1, etiqueta: 'O-' },
    { valor: 2, etiqueta: 'O+' },
    { valor: 3, etiqueta: 'A-' },
    { valor: 4, etiqueta: 'A+' },
    { valor: 5, etiqueta: 'B-' },
    { valor: 6, etiqueta: 'B+' },
    { valor: 7, etiqueta: 'AB-' },
    { valor: 8, etiqueta: 'AB+' },
  ];

  // Función para obtener la etiqueta del tipo de sangre
  const obtenerEtiquetaTipoSangre = (valor) => {
    const tipo = tiposSangre.find((t) => t.valor === valor);
    return tipo ? tipo.etiqueta : 'Desconocido';
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/cedula/${cedula}`);
      setDonante(response.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cédula"
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {donante && (
        <div>
          <p>Nombre: {donante.nombre}</p>
          <p>Edad: {donante.edad}</p>
          <p>Tipo de Sangre: {obtenerEtiquetaTipoSangre(donante.tipoSangre)}</p>
        </div>
      )}
    </div>
  );
};

export default ConsultarPorCedula;