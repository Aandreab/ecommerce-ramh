export const BASE_URL = 'https://tranquil-plains-39024.herokuapp.com/api';



export const registerUser = async (userEmail, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
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

export const loginUser = async (userEmail, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userEmail,
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
//admin functionality starts here

//USERS

//fetch call for adminCheck
export const getMyInfo = async (token) => {
  try{
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json(); 
    return data; 
  } catch (err) {
    console.error(err);
  }
}; 


//fetch call for grabbing all users to display in admin section
export const adminUsers = async (token) => {
  try{
    const response = await fetch(`${BASE_URL}/admin/all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

//fetch calls for editing users
export const removeAdmin = async (token) => {
  try{
     await fetch(`${BASE_URL}/admin/users/remove`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
  } catch (err) {
    console.error(err);
  }
};
export const promoteAdmin = async (token) => {
  try{
     await fetch(`${BASE_URL}/admin/users/promote`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
    });
  } catch (err) {
    console.error(err);
  }
};

//PRODUCTS

//fetch calls for manipulating products to display in admin section

//
// export const adminProducts = async (token) => {
//   try{
//     const response = await fetch(`${BASE_URL}/`)
//   }
// }