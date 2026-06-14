const db = require("../config/db");

const addToCart = (req, res) => {
  console.log("BODY:", req.body);
  console.log("USER:", req.user);
  const userId = req.user.id;

  const { product_id, quantity } = req.body;

  // Check existing cart item

  const checkQuery = `
    SELECT *
    FROM cart
    WHERE user_id = ?
    AND product_id = ?
  `;

  db.query(checkQuery, [userId, product_id], (err, existing) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (existing.length > 0) {
      const updateQuery = `
          UPDATE cart
          SET quantity = quantity + ?
          WHERE user_id = ?
          AND product_id = ?
        `;

      db.query(updateQuery, [quantity, userId, product_id], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        return res.status(200).json({
          success: true,
          message: "Cart updated",
        });
      });
    } else {
      const insertQuery = `
          INSERT INTO cart
          (user_id, product_id, quantity)
          VALUES (?, ?, ?)
        `;

      db.query(insertQuery, [userId, product_id, quantity], (err) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        return res.status(201).json({
          success: true,
          message: "Added to cart",
        });
      });
    }
  });
};

const getCart = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      c.id,
      c.quantity,
      p.id AS product_id,
      p.product_name,
      p.price,
      pi.image_url

    FROM cart c

    JOIN products p
      ON c.product_id = p.id

    LEFT JOIN product_images pi
      ON p.id = pi.product_id
      AND pi.is_primary = 1

    WHERE c.user_id = ?
  `;

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    res.status(200).json({
      success: true,
      count: results.length,
      cart: results,
    });
  });
};

const updateCart = (req, res) => {
  const cartId = req.params.id;

  const { quantity } = req.body;

  // VALIDATION
  if (quantity < 1) {
    return res.status(400).json({
      success: false,
      message: "Quantity must be at least 1",
    });
  }

  const query = `
    UPDATE cart
    SET quantity = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [quantity, cartId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (result.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: "Cart item not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Cart updated successfully",
      });
    }
  );
};

const deleteCartItem = (req, res) => {
  const cartId = req.params.id;

  const query = `
    DELETE FROM cart
    WHERE id = ?
  `;

  db.query(query, [cartId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: "Cart item not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Item removed from cart",
    });
  });
};

module.exports = {
  addToCart,
  getCart,
  updateCart,
  deleteCartItem,
};