import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    console.log("AUTH HEADER:", authHeader);

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized, Login Again"
      });
    }

    const token = authHeader.split(" ")[1];

    // 🔴 THIS IS THE FIX
    if (!token || token === "undefined" || token === "null") {
      return res.status(401).json({
        success: false,
        message: "Invalid token"
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id; // better than req.body
    next();

  } catch (error) {
    console.log("JWT ERROR:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid token"
    });
  }
};
