const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432, 
      user: 'postgres',
      password: '01813',
      database: 'Blog'
    }
});

module.exports = {
    query: async (text, params) => {
        const result = await knex.raw(text, params); 
        return result;
    },
    knex 
};