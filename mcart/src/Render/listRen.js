import React from "react";

let listRen = () => {
  let product = [
    { productName: "Iphone", price: "500USD" },
    { productName: "Samsung", price: "100USD" },
    { productName: "Honor", price: "100USD" },
    { productName: "Iphone", price: "500USD" },
    { productName: "Samsung", price: "100USD" },
    { productName: "Honor", price: "100USD" },
  ];
  return (
    <div>
      <ul>
        {product.map((value, index) => {
          return (
            <li key={index} value={value.price} className="xyz">
              {value.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default listRen;
