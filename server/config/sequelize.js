import path from 'path';

const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'dev';

const config = {
  dev: {
    root: rootPath,
    app: {
      name: 'proj2-db'
    },
    port: 5432,
    db: {
      database: 'proj2',
      user: 'postgres',
      password: '',
      options: {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
          max: 100,
          min: 0,
          idle: 10000
        }
      }
    }
  },
  prod: {
    root: rootPath,
    app: {
      name: 'proj2-db'
    },
    port: 5432,
    db: {
      database: 'proj2',
      user: 'postgres',
      password: '',
      options: {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
          max: 100,
          min: 0,
          idle: 10000
        }
      }
    }
  }
}

module.exports = config[env];
