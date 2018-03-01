\c musicapp_db;


-- DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS playlists;

-- CREATE TABLE users (
-- 	id SERIAL PRIMARY KEY,
-- 	username VARCHAR(255),
-- 	password VARCHAR(255),
-- 	date_created TIMESTAMP NOT NULL DEFAULT NOW()
-- );

CREATE TABLE playlists (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	-- user_id INTEGER REFERENCES users(id),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()	
);

CREATE TABLE tracks (
	id VARCHAR PRIMARY KEY,
	name VARCHAR(255),
	artist VARCHAR(255),
	album VARCHAR(255),
	playlist_id INTEGER REFERENCES playlists(id),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);