\c musicapp_db;

DROP TABLE IF EXISTS tracks;
DROP TABLE IF EXISTS playlists;

CREATE TABLE playlists (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()	
);

CREATE TABLE tracks (
	id SERIAL PRIMARY KEY,
	title VARCHAR(255),
	artist VARCHAR(255),
	lyrics VARCHAR(1000000),
	playlist_id INTEGER REFERENCES playlists(id),
	date_created TIMESTAMP NOT NULL DEFAULT NOW()
);