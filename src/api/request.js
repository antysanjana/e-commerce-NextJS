import { LOGIN_API, ME_API, PRODUCTS_API } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async ({ username, password }) => {
  const loginURL = `${BASE_URL}/${LOGIN_API}`;
  try {
    const response = await fetch(loginURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("Logged In: ", data);
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
