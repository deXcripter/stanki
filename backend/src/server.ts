// cores
import http from "http";
import app from "./app";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";

dotenv.config({ path: path.resolve(__dirname, "../config.env") });

const server = http.createServer(app);

// server
const PORT = (process.env.post as unknown as number) || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
