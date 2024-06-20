export default () => ({
  port: parseInt(process.env.PORT) || 8000,
  database: {
    postgres: {
      host: process.env.DATABASE_POSTGRES_HOST,
      port: parseInt(process.env.DATABASE_POSTGRES_PORT) || 5432,
      userName: process.env.DATABASE_POSTGRES_USERNAME,
      password: process.env.DATABASE_POSTGRES_PASSWORD,
      database: process.env.DATABASE_POSTGRES_DATABASE,
    },
  },
})
