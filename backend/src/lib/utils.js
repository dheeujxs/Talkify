import jwt from "jsonwebtoken";
import { ENV } from "./env.js";

export const generateToken = (userId, res) => {
  const { JWT_SECRET } = ENV;

  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not configured");
  }

  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set secure cookie for Render <-> Vercel setup
  res.cookie("token", token, {
    httpOnly: true,               // Protect from XSS
    secure: ENV.NODE_ENV !== "development", // true in production
    sameSite: "none",             // Required for cross-domain cookies
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  return token;
};
