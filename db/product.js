const client = require("../client");

// DATABASE FUNCTIONS
const createProduct = async ({
    title,
    author,
    publisher,
    image,
    genre,
    description,
    rating,
    price,
    iventory,
    isActive = true,
}) => {
    try {
        const { rows } = await client.query(
            `
            INSERT INTO products(title, author, publisher, image, genre, description, rating, price, iventory, isActive)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *;
            `,
            [
            title,
            author,
            publisher,
            image,
            genre,
            description,
            rating,
            price,
            iventory,
            isActive
            ]
        );
        return rows;
    } catch (error) {
        console.error("Error: Problem creating product...", error)
    }
};

const getProductById = async (id) => {
    try {
        const { rows } = await client.query(`
        SELECT * FROM products
        WHERE id = $1;
        `,
        [id]
        );
        return rows;
    } catch (error) {
    console.error("Error: Problem getting products by Id...", error)
    }
};

async function getAllProducts() {
    try {
        const { rows } = await client.query(
            `
            SELECT * FROM products
            `
        );
        return rows;
    } catch (error) {
        console.log("Error: Problem retrieving all products...", error);
    }
}

async function getProductByName(name) {
    try {
        const {
            rows: [product],
        } = await client.query(
            `
        SELECT * FROM products
        WHERE name = $1;
        `, [name]);
        return product;
    } catch (error) {
        console.error("Error: Problem getting product name...", error);
    }
}



async function updateProduct({ id, description, authorId, distId }) {
    const fields = { description, authorId, distId };

    const setString = Object.keys(fields)
        .map((key, index) => `"${key}"=$${index + 1}`)
        .join(", ");

    if (setString.length === 0) {
        return;
    }
    try {
        const {
            rows: [product],
        } = await client.query(
            `
            UPDATE products
            SET ${setString}
            WHERE id=${id}
            RETURNING *;
            `,
            Object.values(fields)
        );
        return product;
    } catch (error) {
        console.error("Problem updating products!", error);
    }
}

async function addCount(id) {
    const product = await getProductById(id);
  
    try {
      const { rows } = await client.query(
        `
      UPDATE products
      SET count = $1
      WHERE id = $2
      RETURNING *
      `,
        [product.count + 1, id]
      );
      return rows;
    } catch (error) {
        console.error("Problem updating products!", error);
    }
  }

  async function subtractCount(id) {
    const product = await getProductById(id);
  
    try {
      const { rows } = await client.query(
        `
      UPDATE products
      SET count = $1
      WHERE id = $2
      RETURNING *
      `,
        [product.count - 1, id]
      );
      return rows;
    } catch (error) {
        console.error("Problem updating products!", error);
    }
  }

const destroyProduct = async (id) => {
    await client.query(`
    DELETE FROM reviews WHERE product_id = $1;
    `,
        [id]
    );
    await client.query(`
    DELETE FROM product_orders WHERE products_id = $1;
    `,
        [id]
    );
    const deletedProduct = await client.query(`
    DELETE FROM products WHERE id = $1
    RETURNING *;
    `,
        [id]
    );
    return deletedProduct;
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    getProductByName,
    updateProduct,
    destroyProduct,
    addCount,
    subtractCount
};