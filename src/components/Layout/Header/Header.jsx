import "./Header.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      navigate(`/search-results?query=${searchQuery}`);
    }
  };

  return (
    <>
      <div className="top-bar">
        <section className="izquierda">
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <h1 className="text-8xl">A-Shus</h1>
          </Link>
          <a className="left" href="#mas-vendidos">
            Más Vendidos
          </a>
          <a className="left" href="#nuevos">
            Nuevos
          </a>
        </section>
        <div className="separacion">
          <Link className="right" to="/cart">
            Cart
          </Link>
          <Link className="right" to="/ayuda">
            Ayuda
          </Link>
          <Link>
            <button className="MiCuentaButton">Mi Cuenta</button>
          </Link>
        </div>
      </div>
      <div>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            className="search-bar"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar productos por nombre..."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
    </>
  );
};

export { Header };
