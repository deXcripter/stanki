const EnviromentConfig = {
  DB: process.env.DATABASE! as string,
  LOCAL_DB: 'mongodb://127.0.0.1:27017/stanki',
};

for (let key in EnviromentConfig) {
  // @ts-ignore
  if (!EnviromentConfig[key]) {
    console.error(`${key} is missing its value in the enviroment`);
    process.exit(1);
  }
}

export default EnviromentConfig;
