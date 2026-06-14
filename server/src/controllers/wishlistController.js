const db = require("../config/db");

const addToWishlist = (req, res) => {
  const userId = req.user.id;

  const { product_id } = req.body;

  const checkQuery = `
    SELECT *
    FROM wishlist
    WHERE user_id = ?
    AND product_id = ?
  `;

  db.query(
    checkQuery,
    [userId, product_id],
    (err, existing) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (existing.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Already in wishlist",
        });
      }

      const insertQuery = `
        INSERT INTO wishlist
        (user_id, product_id)
        VALUES (?, ?)
      `;

      db.query(
        insertQuery,
        [userId, product_id],
        (err) => {
          if (err) {
            return res.status(500).json({
              success: false,
              message: err.message,
            });
          }

          res.status(201).json({
            success: true,
            message: "Added to wishlist",
          });
        }
      );
    }
  );
};

const getWishlist = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT
      w.id,
      p.id AS product_id,
      p.product_name,
      p.price,
      p.category,
      pi.image_url
    FROM wishlist w

    JOIN products p
      ON w.product_id = p.id

    LEFT JOIN product_images pi
      ON p.id = pi.product_id
      AND pi.is_primary = 1

    WHERE w.user_id = ?
    AND p.is_active = 1

    ORDER BY w.id DESC
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
      wishlist: results,
    });
  });
};

const removeFromWishlist = (req, res) => {
  const wishlistId = req.params.id;
  const userId = req.user.id;

  const query = `
    DELETE FROM wishlist
    WHERE id = ?
    AND user_id = ?
  `;

  db.query(
    query,
    [wishlistId, userId],
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
          message: "Wishlist item not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Removed from wishlist",
      });
    }
  );
};

module.exports = {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
};