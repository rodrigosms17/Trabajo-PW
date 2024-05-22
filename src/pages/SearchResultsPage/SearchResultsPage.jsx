import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';

const productos = [
  { id: 1, nombre: "Toyota Corolla", marca: "Toyota", precio: 20000 },
  { id: 2, nombre: "Honda Civic", marca: "Honda", precio: 22000 },
  { id: 3, nombre: "Toyota Camry", marca: "Toyota", precio: 25000 },
  { id: 4, nombre: "Ford Focus", marca: "Ford", precio: 18000 },
  { id: 5, nombre: "Toyota Prius", marca: "Toyota", precio: 24000 },
  { id: 6, nombre: "Chevrolet Malibu", marca: "Chevrolet", precio: 23000 },
  { id: 7, nombre: "Nissan Altima", marca: "Nissan", precio: 21000 },
  { id: 8, nombre: "Mazda 3", marca: "Mazda", precio: 19000 },
  { id: 9, nombre: "Subaru Impreza", marca: "Subaru", precio: 26000 },
  { id: 10, nombre: "Volkswagen Golf", marca: "Volkswagen", precio: 27000 },
  { id: 11, nombre: "Hyundai Elantra", marca: "Hyundai", precio: 19500 },
  { id: 12, nombre: "Kia Optima", marca: "Kia", precio: 20000 },
  { id: 13, nombre: "BMW 3 Series", marca: "BMW", precio: 35000 },
  { id: 14, nombre: "Mercedes-Benz C-Class", marca: "Mercedes-Benz", precio: 40000 },
  { id: 15, nombre: "Audi A4", marca: "Audi", precio: 37000 }
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get('query').toLowerCase();
  const [sortCriteria, setSortCriteria] = useState('nombre');

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const sortProducts = (products, criteria) => {
    return [...products].sort((a, b) => {
      if (criteria === 'precio') {
        return a.precio - b.precio;
      }
      return a.nombre.localeCompare(b.nombre);
    });
  };

  const searchResults = productos
    .filter(producto => producto.marca.toLowerCase().includes(searchTerm))
    .sort((a, b) => sortCriteria === 'precio' ? a.precio - b.precio : a.nombre.localeCompare(b.nombre));

  return (
    <div className="search-results-container">
      <h2>Resultados de la búsqueda para "{searchTerm}":</h2>
      <div className="sort-container">
        <label className="ordenar" htmlFor="sort">Ordenar por:</label>
        <select className="ordenarBot" id="sort" value={sortCriteria} onChange={handleSortChange}>
          <option value="nombre">Nombre</option>
          <option value="precio">Precio</option>
        </select>
      </div>
      <table className="results-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {sortProducts(searchResults, sortCriteria).map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.nombre}</td>
              <td>{result.marca}</td>
              <td className="precio">${result.precio.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsPage;
