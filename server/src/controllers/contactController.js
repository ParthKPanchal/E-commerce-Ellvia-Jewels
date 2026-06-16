const db = require("../config/db");

const sendMessage = (req, res) => {
  const {
    name,
    email,
    message,
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const query = `
    INSERT INTO contacts
    (
      name,
      email,
      message
    )
    VALUES (?, ?, ?)
  `;

  db.query(
    query,
    [name, email, message],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      res.status(201).json({
        success: true,
        message: "Message sent successfully",
      });
    }
  );
};

module.exports = {
  sendMessage,
};