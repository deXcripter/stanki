const EnviromentConfig = {
  DB: process.env.DATABASE! as string,
  LOCAL_DB: 'mongodb://127.0.0.1:27017/stanki',

  CLOUDINARY: {
    NAME: process.env.CLOUDINARY_CLOUD_NAME!,
    KEY: process.env.CLOUDINARY_API_KEY!,
    SECRET: process.env.CLOUDINARY_API_SECRET!,
  },
};

for (let key in EnviromentConfig) {
  // @ts-ignore
  if (!EnviromentConfig[key]) {
    console.error(`${key} is missing its value in the enviroment`);
    process.exit(1);
  }
}

export default EnviromentConfig;
