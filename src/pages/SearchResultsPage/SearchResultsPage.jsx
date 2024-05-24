import { useState } from "react";
import { useLocation } from "react-router-dom";

import { PRODUCTS } from "../../constants/products";

import "./SearchResultsPage.css";

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

  const searchResults = PRODUCTS.filter((producto) =>
    producto.marca.toLowerCase().includes(searchTerm),
  ).sort((a, b) =>
    sortCriteria === "precio"
      ? a.price - b.price
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
              <td className="precio">${result.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultsPage;
