import axios from "axios";

export const AllProductApi = async () => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data;
};

export const ProductApi = async (index) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/${index}`,
  );
  return response.data;
};
