import React from "react";
import useFetchBands from "./hooks/useFetchBands";

function App() {
  const { bands, loading, error } = useFetchBands();

  if (loading) {
    return <div>Cargando bandas...</div>;
  }

  if (error) {
    return <div>Error al cargar las bandas: {error}</div>;
  }

  return (
    <div>
      <h1>Lista de Bandas</h1>
      {bands && bands.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Género</th>
            </tr>
          </thead>
          <tbody>
            {bands.map((band) => (
              <tr key={band.id}>
                <td>{band.name}</td>
                <td>{band.genre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay bandas disponibles.</p>
      )}
    </div>
  );
}

export default App;
