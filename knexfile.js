// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
<<<<<<< HEAD
      filename: './data/projects.db3'
=======
      filename: './data/recipes.db3'
>>>>>>> 188f878e5f336d2aff55c2859415ece0cc9e1ac7
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // sqlite will not enforce Foreing Keys by default
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done) //turns on the FK enforcement
      }
    }
  },

};
