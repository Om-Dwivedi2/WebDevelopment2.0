import React, { useContext, useEffect, useState } from "react";
import Card1 from "../components/Card1";
import axios from "axios";
import { CreateProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const AllProductData = useContext(CreateProductContext);
  const navigate = useNavigate();

  console.log(AllProductData);

  return (
    <>
      <div className="px-20 pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 bg-yellow-50 ">
        {AllProductData &&
          AllProductData.map((element, inx) => {
            return <Card1 key={element.inx} id={element.id} data={element} />;
          })}
      </div>
    </>
  );
};

export default Product;
