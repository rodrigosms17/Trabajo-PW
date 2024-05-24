import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "./SearchResultsPage.css";

const productos = [
  { id: 1, nombre: "Nike Air Max", marca: "Nike", precio: 120 },
  { id: 2, nombre: "Adidas Ultraboost", marca: "Adidas", precio: 150 },
  { id: 3, nombre: "Puma RS-X", marca: "Puma", precio: 100 },
  { id: 4, nombre: "Reebok Classic Leather", marca: "Reebok", precio: 80 },
  { id: 5, nombre: "New Balance 574", marca: "New Balance", precio: 90 },
  { id: 6, nombre: "Vans Old Skool", marca: "Vans", precio: 70 },
  {
    id: 7,
    nombre: "Converse Chuck Taylor All Star",
    marca: "Converse",
    precio: 60,
  },
  {
    id: 8,
    nombre: "Under Armour HOVR Phantom",
    marca: "Under Armour",
    precio: 130,
  },
  { id: 9, nombre: "Asics Gel-Kayano", marca: "Asics", precio: 160 },
  { id: 10, nombre: "Skechers Go Walk", marca: "Skechers", precio: 75 },
  { id: 11, nombre: "Fila Disruptor", marca: "Fila", precio: 110 },
  { id: 12, nombre: "Salomon Speedcross", marca: "Salomon", precio: 140 },
  { id: 13, nombre: "Brooks Ghost", marca: "Brooks", precio: 130 },
  { id: 14, nombre: "Mizuno Wave Rider", marca: "Mizuno", precio: 140 },
  { id: 15, nombre: "Saucony Jazz Original", marca: "Saucony", precio: 80 },
];

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
  const query = useQuery();
  const searchTerm = query.get("query").toLowerCase();
  const [sortCriteria, setSortCriteria] = useState("nombre");

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
  };

  const sortProducts = (products, criteria) => {
    return [...products].sort((a, b) => {
      if (criteria === "precio") {
        return a.precio - b.precio;
      }
      return a.nombre.localeCompare(b.nombre);
    });
  };

  const searchResults = productos
    .filter((producto) => producto.marca.toLowerCase().includes(searchTerm))
    .sort((a, b) =>
      sortCriteria === "precio"
        ? a.precio - b.precio
        : a.nombre.localeCompare(b.nombre),
    );

  return (
    <div className="search-results-container">
      <h2>Resultados de la búsqueda para "{searchTerm}":</h2>
      <div className="sort-container">
        <label className="ordenar" htmlFor="sort">
          Ordenar por:
        </label>
        <select
          className="ordenarBot"
          id="sort"
          value={sortCriteria}
          onChange={handleSortChange}
        >
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
