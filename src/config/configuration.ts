import * as process from 'process';

const DEFAULT_PORT = 3001
const DEFAULT_DATABASE_PORT = 3001

export const configuration = () => {
  return {
    port: parseInt(process.env.PORT, 10) || DEFAULT_PORT,
    isDev: process.env.IS_DEV === 'true',
    isProd: process.env.IS_PROD === 'true',
    bot: {
      token: process.env.BOT_TOKEN,
    },
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || DEFAULT_DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      name: process.env.DATABASE_NAME,
    }
  }
};
