import React from "react";
import classes from "./Catagory.module.css";
import { Link } from "react-router-dom";

function CatagoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/Catagory/${data?.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data.name + "products"} />
                  <p>shop now</p>
        </Link>
    </div>
  );
}

export default CatagoryCard;
