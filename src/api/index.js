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
    const token = await response.json();
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

//fetch call for userInfo
export const getMyInfo = async (token) => {
  try {
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
export const usersGrab = async () => {
  try {
    const response = await fetch(`${BASE_URL}/admin/users/all-users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
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
  try {
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
  try {
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

//get all products

export const getProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/products/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};



//CART 
//get cart
export const getCart = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/orders/me/cart`, {
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


//add to cart
export const addToCart = async (userId, productPrice, productId, quantity) => {
  try {
    const response = await fetch(`${BASE_URL}/orders/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId, 
        productPrice, 
        productId, 
        quantity
      }),
    });
    const data = await response.json()
    
    return data;
  } catch (err) {
    console.error(err);

  }
}

//delete from cart
export const deleteFromCart = async (orderId, productId, productPrice, quantity) => {
  try {
    const response = await fetch(`${BASE_URL}/orders/cart`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId, 
        productId, 
        productPrice, 
        quantity
      }),
    });
    const data = await response.json()
    
    return data;
  } catch (err) {
    console.error(err);

  }
}