import Layout from "@/components/Dashboard/Layout";
import Loading from "./loading"; // Asegúrate de importar correctamente tu componente Loading
import React from "react";
import useSWR from "swr";

function NumeroComponente() {
  const { data, error } = useSWR("/api/products", fetcher);
  if (error) {
    return <Layout><div>Error al cargarlos datos.</div></Layout>
  }
  if (!data) {
    return <Layout><div>Cargando datos...</div></Layout>
  }
  return (
    <div>
      <Layout>
        <h1>Productos</h1>
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </Layout>
    </div>
  );
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export default NumeroComponente;
