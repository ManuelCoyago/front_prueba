import React from 'react';
import AgregarDonante from './components/AgregarDonante';
import ConsultarPorCedula from './components/ConsultaPorCedula';
import ConsultarPorTipoSangre from './components/ConsultaPorTipoSangre';
import ListarDonantes from './components/ListarDonantes';

const App = () => {
  return (
    <div>
      <h1>Sistema de Donantes</h1>
      <AgregarDonante />
      <ConsultarPorCedula />
      <ConsultarPorTipoSangre />
      <ListarDonantes />
    </div>
  );
};

export default App;