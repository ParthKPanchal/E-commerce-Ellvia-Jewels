const db = require("../config/db");

const addAddress = (req, res) => {
  const userId = req.user.id;

  const {
    full_name,
    phone,
    address_line_1,
    address_line_2,
    city,
    state,
    country,
    postal_code,
  } = req.body;

  const query = `
    INSERT INTO addresses (
      user_id,
      full_name,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      postal_code
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [
      userId,
      full_name,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      postal_code,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Address added successfully",
        addressId: result.insertId,
      });
    }
  );
};

const getAddresses = (req, res) => {
  const userId = req.user.id;

  const query = `
    SELECT *
    FROM addresses
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
      addresses: results,
    });
  });
};

const updateAddress = (req, res) => {
  const addressId = req.params.id;
  const userId = req.user.id;

  const {
    full_name,
    phone,
    address_line_1,
    address_line_2,
    city,
    state,
    country,
    postal_code,
  } = req.body;

  const query = `
    UPDATE addresses
    SET
      full_name = ?,
      phone = ?,
      address_line_1 = ?,
      address_line_2 = ?,
      city = ?,
      state = ?,
      country = ?,
      postal_code = ?
    WHERE id = ?
    AND user_id = ?
  `;

  db.query(
    query,
    [
      full_name,
      phone,
      address_line_1,
      address_line_2,
      city,
      state,
      country,
      postal_code,
      addressId,
      userId,
    ],
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
          message: "Address not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Address updated successfully",
      });
    }
  );
};

const deleteAddress = (req, res) => {
  const addressId = req.params.id;
  const userId = req.user.id;

  const query = `
    DELETE FROM addresses
    WHERE id = ?
    AND user_id = ?
  `;

  db.query(
    query,
    [addressId, userId],
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
          message: "Address not found",
        });
      }

      res.status(200).json({
        success: true,
        message: "Address deleted successfully",
      });
    }
  );
};

module.exports = {
  addAddress,
  getAddresses,
  updateAddress,
  deleteAddress,
};