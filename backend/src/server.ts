// cores
import http from 'http';
import app from './app';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';

dotenv.config({ path: path.resolve(__dirname, '../config.env') });

const server = http.createServer(app);

mongoose
  .connect(process.env.LDB as string)
  .then((data) => {
    const PORT = (process.env.port as unknown as number) || 4000;
    server.listen(PORT, () => {
      console.log(`Server is running on ${PORT} ..✅`);
    });
  })
  .catch((err) => {
    console.log(err.message as string);
    process.exit();
  });
