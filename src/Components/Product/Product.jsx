import React, { useEffect, useState } from "react";
import axios from "axios";

import classes from "./Product.module.css";
import Loader from "../Loader/Loader";
import ProductCard from "./productCard";
import { FakeStoreAPI_BaseURL } from "../../API/EndPoints";
console.log(FakeStoreAPI_BaseURL);

function Product() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://fakestoreapi.com/products", { timeout: 100000 })
      .then((res) => {
        console.log(FakeStoreAPI_BaseURL);

        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
   console.log(products)
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.products_container}>
          {products?.map((singleProduct) => {
            return (
              <ProductCard
                renderAdd={true}
                product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
