import dotenv from "dotenv";
import path from "path";

dotenv.config();

export const BACKEND_URL =
  (process.env.NEXT_PUBLIC_BACKEND_URL as string) || "http://localhost:5001";
export const WS_URL =
  (process.env.NEXT_PUBLIC_BACKEND_URL as string) || "http://localhost:5001";
