import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { AllProductApi } from "../Api/AllProducts";

export const CreateProductContext = createContext();

const ProductContext = (props) => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const data = await AllProductApi();
      setProductData(data);
    };
    fetch();
  }, []);

  return (
    <>
      <div>
        <CreateProductContext.Provider value={productData}>
          {props.children}
        </CreateProductContext.Provider>
      </div>
    </>
  );
};

export default ProductContext;
