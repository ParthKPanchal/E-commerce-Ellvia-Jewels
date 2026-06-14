const db = require("../config/db");

const createOrder = (req, res) => {
  const userId = req.user.id;

  const cartQuery = `
    SELECT
      c.product_id,
      c.quantity,
      p.price
    FROM cart c
    JOIN products p
      ON c.product_id = p.id
    WHERE c.user_id = ?
  `;

  db.query(cartQuery, [userId], (err, cartItems) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }

    let totalAmount = 0;

    cartItems.forEach((item) => {
      totalAmount += item.price * item.quantity;
    });

    const orderQuery = `
      INSERT INTO orders
      (
        user_id,
        total_amount,
        payment_status,
        order_status
      )
      VALUES (?, ?, 'pending', 'pending')
    `;

    db.query(
      orderQuery,
      [userId, totalAmount],
      (err, orderResult) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        const orderId = orderResult.insertId;

        const orderItems = cartItems.map((item) => [
          orderId,
          item.product_id,
          item.quantity,
          item.price,
        ]);

        const orderItemsQuery = `
          INSERT INTO order_items
          (
            order_id,
            product_id,
            quantity,
            price
          )
          VALUES ?
        `;

        db.query(
          orderItemsQuery,
          [orderItems],
          (err) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: err.message,
              });
            }

            res.status(201).json({
              success: true,
              message: "Order created successfully",
              orderId,
              totalAmount,
            });
          }
        );
      }
    );
  });
};

const getMyOrders = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      id,
      total_amount,
      payment_status,
      order_status,
      created_at
    FROM orders
    WHERE user_id = ?
    ORDER BY id DESC
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
      orders: results,
    });
  });
};

const getOrderById = (req, res) => {
  const orderId = req.params.id;
  const userId = req.user.id;

  const orderQuery = `
    SELECT
      *
    FROM orders
    WHERE id = ?
    AND user_id = ?
  `;

  db.query(
    orderQuery,
    [orderId, userId],
    (err, orderResult) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (orderResult.length === 0) {
        return res.status(404).json({
          success: false,
          message: "Order not found",
        });
      }

      const itemsQuery = `
        SELECT
          oi.id,
          oi.quantity,
          oi.price,
          p.product_name
        FROM order_items oi
        JOIN products p
          ON oi.product_id = p.id
        WHERE oi.order_id = ?
      `;

      db.query(
        itemsQuery,
        [orderId],
        (err, itemsResult) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.status(200).json({
            success: true,
            order: orderResult[0],
            items: itemsResult,
          });
        }
      );
    }
  );
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
};