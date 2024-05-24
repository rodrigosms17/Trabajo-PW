import "./Main.css";
import React from "react";
import { Link } from "react-router-dom";

import NikeImg from "../../assets/nike.webp";
import AdidasImg from "../../assets/adidas.jpg";
import PumaImg from "../../assets/puma.avif";
import ReebokImg from "../../assets/reebok.webp";
import NikePinkImg from "../../assets/nike-pink.webp";
import VansImg from "../../assets/vans.webp";
import ConverseImg from "../../assets/converse.jpg";
import UnderArmorImg from "../../assets/under-armor.webp";
import AsicsImg from "../../assets/asics.webp";
import SkechersImg from "../../assets/skechers.jpg";
import FilaImg from "../../assets/fila.jpg";
import SalomanImg from "../../assets/saloman.jpg";

const productos = [
  {
    id: 1,
    nombre: "Nike Air Max",
    marca: "Nike",
    precio: 120,
    img: NikeImg,
  },
  {
    id: 2,
    nombre: "Adidas Ultraboost",
    marca: "Adidas",
    precio: 150,
    img: AdidasImg,
  },
  {
    id: 3,
    nombre: "Puma RS-X",
    marca: "Puma",
    precio: 100,
    img: PumaImg,
  },
  {
    id: 4,
    nombre: "Reebok Classic Leather",
    marca: "Reebok",
    precio: 80,
    img: ReebokImg,
  },
  {
    id: 5,
    nombre: "New Balance 574",
    marca: "New Balance",
    precio: 90,
    img: NikePinkImg,
  },
  {
    id: 6,
    nombre: "Vans Old Skool",
    marca: "Vans",
    precio: 70,
    img: VansImg,
  },
  {
    id: 7,
    nombre: "Converse Chuck Taylor All Star",
    marca: "Converse",
    precio: 60,
    img: ConverseImg,
  },
  {
    id: 8,
    nombre: "Under Armour HOVR Phantom",
    marca: "Under Armour",
    precio: 130,
    img: UnderArmorImg,
  },
  {
    id: 9,
    nombre: "Asics Gel-Kayano",
    marca: "Asics",
    precio: 160,
    img: AsicsImg,
  },
  {
    id: 10,
    nombre: "Skechers Go Walk",
    marca: "Skechers",
    precio: 75,
    img: SkechersImg,
  },
  {
    id: 11,
    nombre: "Fila Disruptor",
    marca: "Fila",
    precio: 110,
    img: FilaImg,
  },
  {
    id: 12,
    nombre: "Salomon Speedcross",
    marca: "Salomon",
    precio: 140,
    img: SalomanImg,
  },
];

const Main = () => {
  return (
    <>
      <section className="flex flex-col gap-4">
        <h2>Colecciones Destacadas</h2>
        <div className="lineaSep" />
        <div className="flex flex-wrap gap-16 justify-center">
          {productos.map((producto) => (
            <Link
              to={`/product/${producto.id}`}
              key={producto.id}
              className="max-w-[20%] w-full"
            >
              <img
                className="w-full aspect-square rounded-xl"
                src={producto.img}
                alt={producto.nombre}
              />
              <p>{producto.nombre}</p>
              <p>Marca: {producto.marca}</p>
              <p>Precio: ${producto.precio.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4" id="mas-vendidos">
        <h2 id="#mas-vendidos">Más Vendidos del Mes</h2>
        <div className="lineaSep" />
        <div className="grid grid-cols-4 justify-center">
          {productos.slice(0, 4).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.precio.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2 id="nuevos">Nuevas Series</h2>
        <div className="lineaSep" />
        <div className="grid grid-cols-4 justify-center">
          {productos.slice(0, 3).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.precio.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <h2>Productos Nuevos</h2>
        <div className="lineaSep" />
        <div className="products">
          {productos.slice(0, 4).map((producto) => (
            <Link to={`/product/${producto.id}`} key={producto.id}>
              <div className="relative w-56">
                <img
                  className="w-full aspect-square rounded-xl"
                  src={producto.img}
                  alt={producto.nombre}
                />{" "}
                {/* Agregar imagen */}
                <p>{producto.nombre}</p>
                <p>Marca: {producto.marca}</p>
                <p>Precio: ${producto.precio.toLocaleString()}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;
