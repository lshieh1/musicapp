module.exports = process.env.DATABASE_URL || {
  host:     process.env.PG_HOST || 'localhost',
  port:     process.env.PG_PORT || 5432,
  database: process.env.PG_DATABASE || 'musicapp_db',
  username: 'lillian',
  password: '123'
};