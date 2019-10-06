module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'boxel'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'boxel'
    },
    pool: {
      min: 2,
      max: 10
    }
  }
};