import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

dotenv.config({ path: path.join(__dirname, '../config.env') });

console.log('##### Connecting to the Database #####');
mongoose
  .connect(process.env.LOCAL_DB!)
  .then(() => {
    const server = http.createServer((req, res) => {});
    server.listen(process.env.PORT || 8000, () => {
      console.log(
        `Server is currently running on port ${process.env.PORT || 8080}`,
      );
    });
  })
  .catch(() => {
    console.log('An error occured when connecting to the database');
    process.exit(1);
  });
