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

//API call for getting single product
// export const getSingleProduct = async ({ id }) => {
//   const getSingleProuductURL = `${BASE_URL}/${PRODUCTS_API}/${id}`;

//   try {
//     const response = await fetch(getSingleProuductURL);

//     if (!response.ok) {
//       throw new Error(
//         `Network response was not ok. Status: ${response.status}`
//       );
//     }

//     const productData = await response.json();
//     return productData;
//   } catch (error) {
//     console.error("Error occurred during fetching products:", error);
//   }
// };

//API for delete
export const deleteProduct = async ({ id }) => {
  const deleteProductURL = `${BASE_URL}/${PRODUCTS_API}/${id}`;
  try {
    const response = await fetch(deleteProductURL, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`
      );
    }

    const deletedProductData = await response.json();
    return deletedProductData;
  } catch (error) {
    console.error("Error occurred during fetching products:", error);
  }
};
