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
        user: {
          username,
          password,
        },
      }),
    });

    const token  = await response.json();
    //console.log(token)
    return token;
  } catch (err) {
    console.error(err);
  }
};
