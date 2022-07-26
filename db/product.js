const { client } = require("./client");

// async function createProduct({
//     user_id,
//     title,
//     description,
//     price,
//     image,
//     category_id,
// }) {
//     try {
//         const response = await client.query(`
//         INSERT INTO products(user_id,title, descriptio, price, image,category_id)
//         VALUES($1, $2, $3, $4, $5, $6)
//         RETURNING *;
//         `,
//             [user_id, title, description, price, image, category_id]
//         );
//         const product = response.rows[0];
//         return product
//     } catch (error) {
//         console.log("Error")
//     }
// }

async function createProduct({
    
})
const getAllProducts = async () => {
    try {
        const response = await client.query(`
        SELECT * FROM products
        `);
        const data = response.rows;
        return data;
    } catch (error) {
        console.error(error);
    }
};

const getProductById = async (id) => {
    try {
        const response = await client.query(`
        SELECT * FROM products WHERE id = $1;
        `,
            [id]
        );
        const data = response.rows[0];
        return data;
    } catch (error) {
        console.error(error);
    }
};

async function updateProduct({ id, title, description, price, quantity }) {
    try {
        if (title) {
            await client.query(`
            UPDATE products
            SET title = $1
            WHERE id = $2;
            `,
                [title, id]
            );
        }
        if (description) {
            await client.query(`
            UPDATE products
            SET description = $1
            WHERE id = $2;
            `,
                [description, id]
            );
        }
        if (price) {
            await client.query(`
            UPDATE products
            SET price = $1
            WHERE id = $2;
            `,
                [price, id]
            );
        }
        if (quantity) {
            await client.query(`
            UPDATE products
            SET quantity = $1
            WHERE id = $2;
            `,
                [quantity, id]
            );
        }
        const product = await getProductById(id);
        return product;
    } catch (error) {
        console.error(error);
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
    updateProduct,
    getProductById,
    destroyProduct
};