import { Request, Response, NextFunction } from "express";
import { ApiError } from "../exceptions/ApiError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => { // 👈 Add `: void` here
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message }); // 👈 no `return`
    return;
  }

  console.error("Unhandled Error:", err);
  res.status(500).json({ message: "Internal Server Error" });
};
