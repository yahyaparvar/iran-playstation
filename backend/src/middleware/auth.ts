import { Request, RequestHandler, Response } from "express";
import jwt, { Secret } from "jsonwebtoken";

const auth: RequestHandler = async (req: Request, res: Response, next: any) => {
  const secretKey: Secret = process.env.JWT_VERIFY_SECRET_KEY || "mysecretkey";
  const authHeader: string | undefined = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token: string = authHeader;
  console.log(token);
  console.log(authHeader);

  jwt.verify(token, secretKey, (err: any, decoded: any) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token", err });
    }
    req.user = decoded;
    next();
  });
};
export default auth;
