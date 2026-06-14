const db = require("../config/db");

const getDashboardStats = (req, res) => {
  const dashboard = {};

  // Total Users
  db.query("SELECT COUNT(*) AS totalUsers FROM users", (err, usersResult) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    dashboard.totalUsers = usersResult[0].totalUsers;

    // Total Products
    db.query(
      "SELECT COUNT(*) AS totalProducts FROM products WHERE is_active = 1",
      (err, productsResult) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        dashboard.totalProducts = productsResult[0].totalProducts;

        // Total Orders
        db.query(
          "SELECT COUNT(*) AS totalOrders FROM orders",
          (err, ordersResult) => {
            if (err) {
              return res.status(500).json({
                success: false,
                message: err.message,
              });
            }

            dashboard.totalOrders = ordersResult[0].totalOrders;

            // Total Revenue
            db.query(
              `
                SELECT
                  IFNULL(SUM(total_amount), 0) AS totalRevenue
                FROM orders
                `,
              (err, revenueResult) => {
                if (err) {
                  return res.status(500).json({
                    success: false,
                    message: err.message,
                  });
                }

                dashboard.totalRevenue = revenueResult[0].totalRevenue;

                // Pending Orders
                db.query(
                  `
                    SELECT COUNT(*) AS pendingOrders
                    FROM orders
                    WHERE order_status = 'pending'
                    `,
                  (err, pendingResult) => {
                    if (err) {
                      return res.status(500).json({
                        success: false,
                        message: err.message,
                      });
                    }

                    dashboard.pendingOrders = pendingResult[0].pendingOrders;

                    // Confirmed Orders
                    db.query(
                      `
                        SELECT COUNT(*) AS confirmedOrders
                        FROM orders
                        WHERE order_status = 'confirmed'
                        `,
                      (err, confirmedResult) => {
                        if (err) {
                          return res.status(500).json({
                            success: false,
                            message: err.message,
                          });
                        }

                        dashboard.confirmedOrders =
                          confirmedResult[0].confirmedOrders;

                        // Delivered Orders
                        db.query(
                          `
                            SELECT COUNT(*) AS deliveredOrders
                            FROM orders
                            WHERE order_status = 'delivered'
                            `,
                          (err, deliveredResult) => {
                            if (err) {
                              return res.status(500).json({
                                success: false,
                                message: err.message,
                              });
                            }

                            dashboard.deliveredOrders =
                              deliveredResult[0].deliveredOrders;

                            // Cancelled Orders
                            db.query(
                              `
                                SELECT COUNT(*) AS cancelledOrders
                                FROM orders
                                WHERE order_status = 'cancelled'
                                `,
                              (err, cancelledResult) => {
                                if (err) {
                                  return res.status(500).json({
                                    success: false,
                                    message: err.message,
                                  });
                                }

                                dashboard.cancelledOrders =
                                  cancelledResult[0].cancelledOrders;

                                res.status(200).json({
                                  success: true,
                                  dashboard,
                                });
                              },
                            );
                          },
                        );
                      },
                    );
                  },
                );
              },
            );
          },
        );
      },
    );
  });
};

module.exports = {
  getDashboardStats,
};
