import React from "react";
import { categoryInfos } from "./CatagoryData";
import CatagoryCard from "./CatagoryCard";
import classes from "./Catagory.module.css";

function Catagory() {
  return (
    <section className={classes.category__container}>
      {categoryInfos.map((infos) => (
        <CatagoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
}

export default Catagory;
