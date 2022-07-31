<<<<<<< HEAD
export const BASE_URL = 'https://localhost:3001/api';

=======
export const BASE_URL = "https://tranquil-plains-39024.herokuapp.com/api";
>>>>>>> a5a3f7aa9082db7af0275e52efc7e1ad290e6d3b

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
    const data = await response.json();
    return data;
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
        user: {
          username,
          password,
        },
      }),
    });

    const {
      data: { token },
    } = await response.json();
    //console.log(token)
    return token;
  } catch (err) {
    console.error(err);
  }
};
