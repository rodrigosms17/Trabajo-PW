import React from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';

const productos = [
  { id: 1, nombre: "Toyota Corolla", marca: "Toyota" },
  { id: 2, nombre: "Honda Civic", marca: "Honda" },
  { id: 3, nombre: "Toyota Camry", marca: "Toyota" },
  { id: 4, nombre: "Ford Focus", marca: "Ford" },
  { id: 5, nombre: "Toyota Prius", marca: "Toyota" },
  { id: 6, nombre: "Chevrolet Malibu", marca: "Chevrolet" },
  { id: 7, nombre: "Nissan Altima", marca: "Nissan" },
  { id: 8, nombre: "Mazda 3", marca: "Mazda" },
  { id: 9, nombre: "Subaru Impreza", marca: "Subaru" },
  { id: 10, nombre: "Volkswagen Golf", marca: "Volkswagen" },
  { id: 11, nombre: "Hyundai Elantra", marca: "Hyundai" },
  { id: 12, nombre: "Kia Optima", marca: "Kia" },
  { id: 13, nombre: "BMW 3 Series", marca: "BMW" },
  { id: 14, nombre: "Mercedes-Benz C-Class", marca: "Mercedes-Benz" },
  { id: 15, nombre: "Audi A4", marca: "Audi" }
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query').toLowerCase();
  const searchResults = productos.filter(producto => 
    producto.marca.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="search-results-container">
      <h2>Resultados de la búsqueda para "{searchTerm}":</h2>
      <table className="results-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.nombre}</td>
              <td>{result.marca}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsPage;
