import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const products = await axios.get("https://kloset-backend-1.onrender.com/product");
    setProducts(products.data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, fetchProducts };
};
