import { LOGIN_API, ME_API, PRODUCTS_API } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const user = axios.create({
  baseURL: BASE_URL,
});

const products = axios.create({
  baseURL: BASE_URL,
});

const productDetails = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const deleted = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Login API
export const login = ({ username, password }) => {
  const loginResponse = axiosInstance.post(LOGIN_API, {
    username,
    password,
  });
  console.log("This is login data: ", loginResponse);
  return loginResponse;
};

//Get User API
export const getUser = (token) => {
  const userData = user.get(ME_API, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("User Data Axios: ", userData);
  return userData;
};

//API for all products
export const getAllProducts = () => {
  const allProducts = products.get(PRODUCTS_API);
  console.log("All productsd Axios: ", allProducts);
  return allProducts;
};

//API for single product
export const getSingleProduct = (id) => {
  const singleProduct = productDetails.get(`products/${id}`);
  console.log("Single product Axios ", singleProduct);
  return singleProduct;
};

//API for delete
export const deleteProduct = (id) => {
  const deleteProductData = deleted.delete(`products/${id}`);
  console.log("Deleted Product Axios: ", deleteProductData);
  return deleteProductData;
};
