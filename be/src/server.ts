import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import http from 'http';

dotenv.config({ path: path.join(__dirname, '../config.env') });

import app from './app';
import EnviromentConfig from './config';

console.log('###### Connecting to the Database ######');
mongoose
  .connect(EnviromentConfig.DB)
  .then(() => {
    const server = http.createServer(app);
    server.listen(process.env.PORT, () => {
      console.log(`Server is curently running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(
      'An error occured when connecting to the database',
      err.message,
    );
    process.exit(1);
  });

process.on('uncaughtException', (err) => {
  console.log('Something went very wrong!', err.message);
});
