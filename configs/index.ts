import { config } from 'dotenv';

config();
export default {
    MYSQL_CONFIG: {
      user: process.env.DB_USERNAME as string,
      port: Number(process.env.DB_PORT as string),
      password: process.env.DB_PASSWORD as string,
      database: process.env.DB_DATABASE as string,
      host: process.env.DB_HOST as string,
      multipleStatements: true,
    },
    SECRET_KEY: process.env.SECRET_KEY,
    ALGORITHM: process.env.ALGORITHM,
    PORT: process.env.SERVER_PORT,
};
