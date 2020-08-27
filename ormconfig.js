module.exports = {
  type: process.env.TYPEORM_TYPE_CONNECTION,
  url: process.env.DATABASE_URL,
  synchronize: process.env.TYPEORM_SYNCHRONIZE,
  logging: process.env.TYPEORM_LOGGING,
  entities: [process.env.TYPEORM_ENTITIES || 'dist/models/**/*.js'],
  migrations: [
    process.env.TYPEORM_MIGRATIONS || 'dist/database/migration/**/*.js',
  ],
  subscribers: [process.env.TYPEORM_SUCRIBERS || 'dist/subscriber/**/*.js'],
  cli: {
    entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
    subscribersDir: process.TYPEORM_SUCRIBERS_DIR,
  },
};
