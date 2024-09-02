import { LOGIN_API, ME_API, PDODUCTS_API } from "./endpoints";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const login = async ({ username, password }) => {
  const loginURL = `${BASE_URL}${LOGIN_API}`;
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
