export default interface iEnv {
  PORT: string;
  NODE_ENV: string;
  DATABASE: string;
  DATABASE_PASSWORD: string;
  DATABASE_NAME: string;
  DATABASE_USER: string;
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;
  JWT_COOKIE_EXPIRES_IN: string;
  EMAIL_FROM: string;
  EMAIL_PASSWORD: string;
  EMAIL_HOST: string;
  EMAIL_PORT: string;
  EMAIL_USERNAME: string;
  EMAIL_SERVICE: string;
}
