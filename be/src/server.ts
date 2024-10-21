import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

dotenv.config({ path: path.join(__dirname, '../config.env') });

import app from './app';

console.log('##### Connecting to the Database #####');
mongoose
  .connect(process.env.LOCAL_DB!)
  .then(() => {
    const server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`Server is curently running on port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log('An error occured when connecting to the database');
    process.exit(1);
  });

process.on('uncaughtException', (err) => {
  console.log('Something went very wrong!', err.message);
});
