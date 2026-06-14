const db = require("../config/db");

const getAllOrders = (req, res) => {
  const query = `
    SELECT
      o.*,
      u.full_name,
      u.email
    FROM orders o
    JOIN users u
      ON o.user_id = u.id
    ORDER BY o.id DESC
  `;

  db.query(query, (err, results) => {
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

const updateOrderStatus = (req, res) => {
  console.log("BODY:", req.body);

  const orderId = req.params.id;

  const { order_status } = req.body;

  const query = `
    UPDATE orders
    SET order_status = ?
    WHERE id = ?
  `;

  db.query(
    query,
    [order_status, orderId],
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
          message: "Order not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Order status updated successfully",
      });
    }
  );
};

module.exports = {
  getAllOrders,
  updateOrderStatus,
};