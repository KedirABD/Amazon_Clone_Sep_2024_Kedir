import React from "react";

import Layout from "../../Components/LayOut/Layout";
import Category from "../../Components/Catagory/Catagory";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Product from "../../Components/Product/Product";
import Cart from "../Cart/Cart";

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>

    
  );
}

export default Landing;
