import React from "react";
import { Link } from "react-router-dom";

const ProductComponent = ({ product }) => {
  const { id, title, image, price, category } = product;
  return (
    <div className="card">
      <Link to={`/product/${id}`}>
        <img className="card-img-top" src={image} alt={title} />
      </Link>
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <h6 className="card-text">$ {price}</h6>
        <p className="card-text">{category}</p>
        {/* <a href="#" className="btn btn-primary">{category}</a> */}
      </div>
    </div>
  );
};

export default ProductComponent;
