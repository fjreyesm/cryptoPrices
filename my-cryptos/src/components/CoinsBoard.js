import React from "react";

const CoinsList = ({ id, name, price, image }) => {
  return (
    <div className="coins-list">
      <p>id:{id}</p>
      <img src={image} alt={name} />
      <h2> nombre:{name}</h2>
      <p>Precio: {price}</p>
    </div>
  );
};

export default CoinsList;
