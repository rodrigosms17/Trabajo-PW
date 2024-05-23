import { useCart } from "../../contexts/useCart";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Separator } from "../../components/Separator";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import "./checkout-page.css";

const checkoutSchema = z.object({
  linea1: z.string().min(1),
  linea2: z.string().min(1),
  distrito: z.string().min(1),
  ciudad: z.string().min(1),
  pais: z.string().min(1),
  metodoDeEnvio: z.literal("economico").or(z.literal("prioritario")),
});

const METODOS_DE_ENVIO = {
  economico: { label: "Económico Aéreo", amount: 10 },
  prioritario: { label: "Envío prioritario (5 o 10 días)", amount: 17 },
};

export function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card"); // "card" or "qr"

  const { cartProducts, removeFromCart } = useCart();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
  });
  const navigate = useNavigate();

  const metodoDeEnvio = watch("metodoDeEnvio");

  const subtotal = cartProducts
    .map((product) => product.price * product.quantity)
    .reduce((partialSum, n) => partialSum + n, 0);

  const onSubmit = handleSubmit((values) => {
    // TODO: save information

    for (const product of cartProducts) {
      removeFromCart(product);
    }

    navigate("/order/1");
  });

  return (
    <div>
      <p>
        Casi listo! Tu orden no estará completa hasta que revises y presiones el
        botón {'"'}completar orden{'"'} al final de la página
      </p>
      <form className="checkout-page flex flex-col gap-4" onSubmit={onSubmit}>
        <Separator>Datos de compra</Separator>
        <div className="flex flex-row gap-4">
          <FormCard title="Dirección de Envio" className="flex-1 ">
            <input
              className="p-4"
              placeholder="Linea 1"
              {...register("linea1")}
            />
            <Error error={errors.linea1} />
            <input
              className="p-4"
              placeholder="Linea 2"
              {...register("linea2")}
            />
            <Error error={errors.linea2} />
            <input
              className="p-4"
              placeholder="Distrito"
              {...register("distrito")}
            />
            <Error error={errors.distrito} />
            <input
              className="p-4"
              placeholder="Ciudad"
              {...register("ciudad")}
            />
            <Error error={errors.ciudad} />
            <input className="p-4" placeholder="País" {...register("pais")} />
            <Error error={errors.pais} />
          </FormCard>
          <FormCard title="Pago" className="flex-1">
            <div>
              <input
                onChange={() => setPaymentMethod("qr")}
                name="paymentMethod"
                type="radio"
                id="payment-method-qr"
              />
              <label htmlFor="payment-method-qr">Pago con Código QR</label>
            </div>
            <div>
              <input
                onChange={() => setPaymentMethod("card")}
                name="paymentMethod"
                type="radio"
                id="payment-method-card"
              />
              <label htmlFor="payment-method-card">
                Pago con tarjeta de crédito
              </label>
            </div>
            {paymentMethod === "card" && (
              <>
                <input className="p-4" placeholder="Número de tarjeta" />
                <input className="p-4" placeholder="Nombre en tarjeta" />
                <div className="flex gap-2">
                  <input className="p-4 flex-1" placeholder="Vencimiento" />
                  <input className="p-4 flex-1" placeholder="CCV" />
                </div>
              </>
            )}
          </FormCard>
        </div>
        <Separator>Método de Envío</Separator>
        <FormCard>
          <div className="flex gap-32">
            {Object.entries(METODOS_DE_ENVIO).map(
              ([method, { label, amount }]) => (
                <div key={method}>
                  <input
                    onChange={() => setValue("metodoDeEnvio", method)}
                    name="metodoDeEnvio"
                    type="radio"
                    id={`metodo-envio-${method}`}
                  />
                  <label htmlFor="metodo-envio-economico">
                    {label} - S/. {amount}
                  </label>
                </div>
              ),
            )}
          </div>
          {errors.metodoDeEnvio && (
            <Error error={{ message: "Must select one" }} />
          )}
        </FormCard>
        <div className="flex gap-4">
          <FormCard className="flex-1" title="Items en Pedido:">
            <div className="p-8">
              {cartProducts.map((product) => (
                <div key={product.id} className="flex justify-between">
                  <p>
                    {product.quantity} x {product.label}
                  </p>
                  <p>S/. {(product.quantity ?? 1) * product.price}</p>
                </div>
              ))}
            </div>
          </FormCard>
          <FormCard className="flex-1" title="Resumen de Orden:">
            <div className="flex flex-col p-4">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>S/. {subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p>Envío</p>
                <p>S/. {METODOS_DE_ENVIO[metodoDeEnvio]?.amount ?? 0}</p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-black py-4 px-8 text-white border-0 cursor-pointer"
            >
              Completar Orden
            </button>
          </FormCard>
        </div>
      </form>
    </div>
  );
}

function FormCard({ title, children, className, ...props }) {
  return (
    <fieldset className={`bg-white border-0 ${className}`} {...props}>
      {title && <h3>{title}</h3>}
      <div className="flex flex-col gap-2">{children}</div>
    </fieldset>
  );
}

function Error({ error }) {
  if (!error) {
    return null;
  }

  return <span className="text-red-500">{error.message}</span>;
}
