import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './OrderDetail.css';

const OrderDetail = () => {
  const { id } = useParams();

  const orders = [
    { id: 101, fecha: '2023-04-01', estado: 'Entregado', direccion: 'Lima...', metodo: 'Aereo', Pmetodo: 10, pago: 'codigo QR' },
    { id: 102, fecha: '2023-04-02', estado: 'Por enviar', direccion: 'Brazil...', metodo: 'Aereo', Pmetodo: 10, pago: 'codigo QR' },
    { id: 103, fecha: '2023-04-03', estado: 'Por enviar', direccion: 'Tacna...', metodo: 'Prioritario', Pmetodo: 17, pago: 'tarjeta' },
    { id: 104, fecha: '2023-04-04', estado: 'Entregado', direccion: 'Lima...', metodo: 'Prioritario', Pmetodo: 17, pago: 'tarjeta' },
    { id: 105, fecha: '2023-04-03', estado: 'Por enviar', direccion: 'Puno...', metodo: 'Prioritario', Pmetodo: 17, pago: 'tarjeta' },
    { id: 106, fecha: '2023-04-04', estado: 'Entregado', direccion: 'Lima...', metodo: 'Prioritario', Pmetodo: 17, pago: 'tarjeta' },
  ];

  const order = orders.find(order => order.id === parseInt(id));

  const Dorders = [
    { id: 1, orderId: 101, total: 200, item: "zapatilla 2" },
    { id: 2, orderId: 102, total: 200, item: "zapatilla 2" },
    { id: 3, orderId: 103, total: 100, item: "zapatilla 1" },
    { id: 4, orderId: 104, total: 100, item: "zapatilla 1" },
    { id: 1, orderId: 101, total: 300, item: "zapatilla 3" },
    { id: 2, orderId: 102, total: 400, item: "zapatilla 4" },
    { id: 3, orderId: 103, total: 500, item: "zapatilla 5" },
    { id: 4, orderId: 104, total: 1200, item: "zapatilla 12" },
    { id: 5, orderId: 101, total: 200, item: "zapatilla 2" },
    { id: 6, orderId: 102, total: 200, item: "zapatilla 2" },
    { id: 7, orderId: 103, total: 100, item: "zapatilla 1" },
    { id: 8, orderId: 104, total: 100, item: "zapatilla 1" },
    { id: 9, orderId: 105, total: 300, item: "zapatilla 3" },
    { id: 10, orderId: 103, total: 400, item: "zapatilla 4" },
    { id: 11, orderId: 106, total: 500, item: "zapatilla 5" },
    { id: 12, orderId: 106, total: 1200, item: "zapatilla 12" },
  ];

  const iDOrders = Dorders.filter(Dorder => Dorder.orderId === parseInt(id));
  const totalItemsSum = iDOrders.reduce((sum, Dorder) => sum + Dorder.total, 0);

  const [cambioOpcion, opcion] = useState(order.pago);
  const [cambioMetodo, opcionCambioMetodo] = useState(order.metodo);
  const [cambioCostometodo1, cambioCostometodo] = useState(order.Pmetodo);

  const cambio = (newOption) => {
    opcion(newOption);
  };

  const Cambio2 = (newMethod, newCost) => {
    opcionCambioMetodo(newMethod);
    cambioCostometodo(newCost);
  };

  if (!order) {
    return <div>Orden no encontrada</div>;
  }

  const handleCancelClick = () => {
    alert('Pago cancelado');
  };

  return (
    <div>
      <h1>Detalle de Orden {order.id}</h1>

      <h1>Datos de compra</h1>
      <table>
        <tbody>
          <tr>
            <td>Dirección de envío</td>
            <td>Pago</td>
          </tr>
          <tr>
            <td>{order.direccion}</td>
            <td className="button-group">
              <button
                onClick={() => cambio('codigo QR')}
                className={`button-option ${cambioOpcion === 'codigo QR' ? 'selected' : ''}`}
              >
                Código QR
              </button>
              <button
                onClick={() => cambio('tarjeta')}
                className={`button-option ${cambioOpcion === 'tarjeta' ? 'selected' : ''}`}
              >
                Tarjeta
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <h1>Método de envío</h1>
      <table>
        <tbody>
          <tr>
            <td className="button-group">
              <button
                onClick={() => Cambio2('Aereo', 10)}
                className={`button-option ${cambioMetodo === 'Aereo' ? 'selected' : ''}`}
              >
                Económico Aéreo (S/10)
              </button>
              <button
                onClick={() => Cambio2('Prioritario', 17)}
                className={`button-option ${cambioMetodo === 'Prioritario' ? 'selected' : ''}`}
              >
                Envío Prioritario (S/17)
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="order-details-container">
        <div className="order-items">
          <h2>Items pedido</h2>
          <table>
            <tbody>
              {iDOrders.map(Dorder => (
                <tr key={Dorder.id}>
                  <td>{Dorder.item} {Dorder.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="order-summary">
          <h2>Resumen de Orden</h2>
          <table>
            <tbody>
              <tr><td>SubTotal S/{totalItemsSum}</td></tr>
              <tr><td>Envío S/{cambioCostometodo1}</td></tr>
              <tr><td>Impuestos S/{(cambioCostometodo1 + totalItemsSum) * 0.15}</td></tr>
              <tr><td>Total S/{(cambioCostometodo1 + totalItemsSum) * 0.15 + totalItemsSum + cambioCostometodo1}</td></tr>
              <tr><td><button onClick={handleCancelClick}>Cancelar</button></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
