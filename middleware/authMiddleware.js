const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Admin = mongoose.model('Admin');

/**
 * Middleware to protect routes that require authentication
 * Verifies JWT token and adds the admin user to the request object
 */
const protect = async (req, res, next) => {
  let token;

  // Check if token exists in the header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(
        token, 
        process.env.JWT_SECRET || 'jwt_solar_products_secret'
      );

      // Find admin by id and exclude password
      req.admin = await Admin.findById(decoded.id).select('-password');

      if (!req.admin) {
        return res.status(401).json({
          success: false,
          message: 'Not authorized, admin not found'
        });
      }

      next();
    } catch (error) {
      console.error('Token verification failed:', error.message);
      res.status(401).json({
        success: false,
        message: 'Not authorized, token failed'
      });
    }
  } else {
    res.status(401).json({
      success: false,
      message: 'Not authorized, no token'
    });
  }
};

/**
 * Middleware to restrict routes to super-admin role only
 * Must be used after the protect middleware
 */
const superAdmin = (req, res, next) => {
  if (req.admin && req.admin.role === 'super-admin') {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: 'Not authorized, super-admin access required'
    });
  }
};

module.exports = { protect, superAdmin };
