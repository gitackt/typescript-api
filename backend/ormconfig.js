require('dotenv').config()

module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: true,
  entities: ['src/domain/models/**/*.ts'],
  migrations: ['src/orm/migrations/**/*.ts'],
  subscribers: ['src/orm/subscribers/**/*.ts'],
  seeds: ['src/orm/seeds/**/*{.ts,.js}'],
  factories: ['src/orm/factories/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src/domain/models',
    migrationsDir: 'src/orm/migrations',
    subscribersDir: 'src/orm/subscribers',
  },
}
