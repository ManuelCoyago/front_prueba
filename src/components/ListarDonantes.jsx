import React, { useEffect, useState } from 'react';
import api from '../api/donantes';

const ListarDonantes = () => {
  const [donantes, setDonantes] = useState([]);

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

  useEffect(() => {
    const fetchDonantes = async () => {
      try {
        const response = await api.get('/');
        setDonantes(response.data);
      } catch (error) {
        alert(error.response.data.error);
      }
    };
    fetchDonantes();
  }, []);

  return (
    <div>
      <h2>Lista de Donantes</h2>
      <ul>
        {donantes.map((donante) => (
          <li key={donante._id}>
            <p>Nombre: {donante.nombre}</p>
            <p>Cédula: {donante.cedula}</p>
            <p>Edad: {donante.edad} años</p>
            <p>Tipo de Sangre: {obtenerEtiquetaTipoSangre(donante.tipoSangre)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListarDonantes;