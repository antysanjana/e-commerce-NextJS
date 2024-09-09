import { LOGIN_API, ME_API, PRODUCTS_API } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = ({ username, password }) => {
  const loginResponse = axiosInstance.post(LOGIN_API, {
    username,
    password,
  });
  console.log("This is login data: ", loginResponse);
  return loginResponse;
};

export const getUser = async (token) => {
  const getUserDataURL = `${BASE_URL}/${ME_API}`;
  try {
    const response = await fetch(getUserDataURL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const getAllProducts = async () => {
  const getAllProuductsURL = `${BASE_URL}/${PRODUCTS_API}`;
  try {
    const response = await fetch(getAllProuductsURL);
    if (!response.ok) {
      throw new Error(`Products fetchimg failed: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during login:", error);
  }
};

//API call for getting single product
export const getSingleProduct = async ({ id }) => {
  const getSingleProuductURL = `${BASE_URL}/${PRODUCTS_API}/${id}`;

  try {
    const response = await fetch(getSingleProuductURL);

    if (!response.ok) {
      throw new Error(
        `Network response was not ok. Status: ${response.status}`
      );
    }

    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("Error occurred during fetching products:", error);
  }
};

export const getUserData = async () => {
  const getUserDataURL = `${BASE_URL}/${ME_API}`;

  try {
  } catch {}
};

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
