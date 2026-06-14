const db = require("../config/db");

const getAllProducts = (req, res) => {
  try {
    const query = `
      SELECT *
      FROM products
      WHERE is_active = true
      ORDER BY id DESC
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
        products: results,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createProduct = (req, res) => {
  try {
    const {
      sku,
      product_name,
      description,
      price,
      category,
      material,
      finish_color,
      stone_type,
      size,
      occasion,
      style,
      adjustable,
      waterproof,
      tarnish_resistant,
      stock,
      is_bestseller,
      is_new_arrival,
      is_active,
    } = req.body;

    const productQuery = `
      INSERT INTO products (
        sku,
        product_name,
        description,
        price,
        category,
        material,
        finish_color,
        stone_type,
        size,
        occasion,
        style,
        adjustable,
        waterproof,
        tarnish_resistant,
        stock,
        is_bestseller,
        is_new_arrival,
        is_active
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      sku,
      product_name,
      description,
      price,
      category,
      material,
      finish_color,
      stone_type,
      size,
      occasion,
      style,
      adjustable,
      waterproof,
      tarnish_resistant,
      stock,
      is_bestseller,
      is_new_arrival,
      is_active,
    ];

    db.query(productQuery, values, (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: err.message,
        });
      }

      const productId = result.insertId;

      if (req.files && req.files.length > 0) {
        const imageValues = req.files.map((file, index) => [
          productId,
          file.filename,
          index === 0,
        ]);

        const imageQuery = `
          INSERT INTO product_images (
            product_id,
            image_url,
            is_primary
          )
          VALUES ?
        `;

        db.query(
          imageQuery,
          [imageValues],
          (imageErr) => {
            if (imageErr) {
              return res.status(500).json({
                success: false,
                message: imageErr.message,
              });
            }

            return res.status(201).json({
              success: true,
              message:
                "Product and images created successfully",
              productId,
            });
          }
        );
      } else {
        return res.status(201).json({
          success: true,
          message: "Product created successfully",
          productId,
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductById = (req, res) => {
  const { id } = req.params;

  const productQuery = `
    SELECT *
    FROM products
    WHERE id = ?
    AND is_active = true
  `;

  db.query(productQuery, [id], (err, productResult) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }

    if (productResult.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const product = productResult[0];

    const imageQuery = `
      SELECT image_url, is_primary
      FROM product_images
      WHERE product_id = ?
      ORDER BY is_primary DESC
    `;

    db.query(imageQuery, [id], (imageErr, imageResult) => {
      if (imageErr) {
        return res.status(500).json({
          success: false,
          message: imageErr.message,
        });
      }

      res.status(200).json({
        success: true,
        product,
        images: imageResult,
      });
    });
  });
};
module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
};