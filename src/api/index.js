export const BASE_URL = 'https://tranquil-plains-39024.herokuapp.com/api';


export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const token  = await response.json();
    console.log(token);
    return token;
  } catch (error) {
    console.error("error", error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    //console.log(token)
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/products`)
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
