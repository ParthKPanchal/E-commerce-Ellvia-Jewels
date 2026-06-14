const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  try {
    const {
      full_name,
      email,
      password,
      phone,
    } = req.body;

    // Check required fields
    if (!full_name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    // Check existing user
    const checkUserQuery =
      "SELECT * FROM users WHERE email = ?";

    db.query(
      checkUserQuery,
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        if (result.length > 0) {
          return res.status(400).json({
            success: false,
            message: "User already exists",
          });
        }

        // Hash password
        const hashedPassword =
          await bcrypt.hash(password, 10);

        const insertQuery = `
          INSERT INTO users
          (full_name, email, password, phone)
          VALUES (?, ?, ?, ?)
        `;

        db.query(
          insertQuery,
          [
            full_name,
            email,
            hashedPassword,
            phone,
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
              message: "User registered successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const loginUser = (req, res) => {
  try {
    const { email, password } = req.body;

    const query =
      "SELECT * FROM users WHERE email = ?";

    db.query(query, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      if (result.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid Email",
        });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(
        password,
        user.password
      );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message: "Invalid Password",
        });
      }

      const token = jwt.sign(
        {
          id: user.id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      res.status(200).json({
        success: true,
        message: "Login Successful",
        token,
        user: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
          role: user.role,
        },
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProfile = (req, res) => {
  try {
    const query =
      "SELECT id, full_name, email, phone, role FROM users WHERE id = ?";

    db.query(
      query,
      [req.user.id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            success: false,
            message: err.message,
          });
        }

        res.status(200).json({
          success: true,
          user: result[0],
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile,
};