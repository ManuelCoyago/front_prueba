import React, { useState } from 'react';
import api from '../api/donantes';

const ConsultarPorTipoSangre = () => {
  const [tipoSangre, setTipoSangre] = useState('');
  const [resultado, setResultado] = useState(null);

  // Opciones para el combobox de tipo de sangre
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

  const handleSearch = async () => {
    try {
      const response = await api.get(`/tipo/${tipoSangre}`);
      setResultado(response.data);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  // Función para obtener la etiqueta del tipo de sangre
  const obtenerEtiquetaTipoSangre = (valor) => {
    const tipo = tiposSangre.find((t) => t.valor === valor);
    return tipo ? tipo.etiqueta : 'Desconocido';
  };

  return (
    <div>
      <select
        value={tipoSangre}
        onChange={(e) => setTipoSangre(e.target.value)}
      >
        <option value="">Seleccione el tipo de sangre</option>
        {tiposSangre.map((tipo) => (
          <option key={tipo.valor} value={tipo.valor}>
            {tipo.etiqueta}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Buscar</button>
      {resultado && (
        <p>
          Cantidad de donantes con tipo de sangre{' '}
          {obtenerEtiquetaTipoSangre(resultado.tipoSangre)}: {resultado.cantidad}
        </p>
      )}
    </div>
  );
};

export default ConsultarPorTipoSangre;