import { Error } from "../../../components/Error";
import { addProductSchema } from "../../../schemas/product";
import { Sidebar } from "../components/Sidebar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useProducts } from "../../../contexts/useProducts";
import { useNavigate } from "react-router-dom";

export function AgregarProductoPage() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = form.handleSubmit((values) => {
    addProduct(values);
    navigate("/dashboard/products");
  });

  return (
    <div className="flex gap-4 my-5 mx-12">
      <Sidebar />
      <div>
        <h1>Agregar Producto</h1>
        <form className="flex flex-col gap-2" onSubmit={onSubmit}>
          <input type="text" placeholder="Image" {...form.register("img")} />
          <Error>{form.formState.errors.img}</Error>
          <input
            type="text"
            placeholder="Nombre"
            {...form.register("nombre")}
          />
          <Error>{form.formState.errors.nombre}</Error>
          <input
            type="number"
            placeholder="Precio"
            {...form.register("price")}
          />
          <Error>{form.formState.errors.price}</Error>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
