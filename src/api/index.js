export const BASE_URL = "https://tranquil-plains-39024.herokuapp.com/api";

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
    const data = await response.json();
    console.log(data);
    return data;
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
    return data;
  } catch (err) {
    console.error(err);
  }
};
//admin functionality starts here

//USERS

//fetch call for user info
export const getMyInfo = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
export const removeAdmin = async (token, userId) => {
  try {
    await fetch(`${BASE_URL}/admin/user/remove`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
      }),
    });
  } catch (err) {
    console.error(err);
  }
};
export const promoteAdmin = async (token, userId) => {
  try {
    await fetch(`${BASE_URL}/admin/user/administrator`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userId,
      }),
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
export const removeProduct = async (token, productId) => {
  try {
    await fetch(`${BASE_URL}/admin/products/${productId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
      }),
    });
  } catch (err){
    console.error(err)
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
export const editProduct = async (
  title,
  author,
  publisher,
  imageLink,
  genre,
  price,
  inventory,
  description,
  token, 
  productId,
) => {
  try {
    const response = await fetch(`${BASE_URL}/admin/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        author,
        publisher,
        imageLink,
        genre,
        price,
        inventory,
        description,
      }),
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error("error", error);
  }
};
export const addProduct = async (
  title,
  author,
  publisher,
  imageLink,
  genre,
  price,
  inventory,
  description,
  token,
) => {
  try {
    const response = await fetch(`${BASE_URL}/admin/products/add`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        author,
        publisher,
        imageLink,
        genre,
        price,
        inventory,
        description,
      }),
    });

    const data = response.json();
    return data;
  } catch (error) {
    console.error("error", error);
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
