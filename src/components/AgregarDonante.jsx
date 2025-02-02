import React, { useState } from 'react';
import api from '../api/donantes';

const AgregarDonante = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombre: '',
    edad: '',
    tipoSangre: '',
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/', formData);
      alert(response.data.message);
      // Limpiar el formulario después de agregar
      setFormData({
        cedula: '',
        nombre: '',
        edad: '',
        tipoSangre: '',
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cedula"
        placeholder="Cédula"
        value={formData.cedula}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="edad"
        placeholder="Edad"
        value={formData.edad}
        onChange={handleChange}
        required
      />
      <select
        name="tipoSangre"
        value={formData.tipoSangre}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione el tipo de sangre</option>
        {tiposSangre.map((tipo) => (
          <option key={tipo.valor} value={tipo.valor}>
            {tipo.etiqueta}
          </option>
        ))}
      </select>
      <button type="submit">Agregar Donante</button>
    </form>
  );
};

export default AgregarDonante;