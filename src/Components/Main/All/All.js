import React from "react";
import Products from "../All/Praducts/Products";
import ProductsFilter from "../All/Praducts/ProductsFilter";
import "../main.style.css";

export default function All({category, cart ,setCart}) {

    const { products, loading, error } = ProductsFilter({category});

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error.message}</p>;
    }

  return (
    <main className="Product">
      <section className="ConteynerProducts">
        <div className="Products">
          <div className="ConteynerProducts">
          
            {products.map((product) => (
              <Products key={product.id} product={product} cart={cart}  setCart={setCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
