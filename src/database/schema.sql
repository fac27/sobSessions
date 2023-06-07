PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS songs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    artist TEXT,
    url TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS interactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    -- git_user_id INTEGER NOT NULL,
    song_id INTEGER REFERENCES songs(id),
    rating INTEGER,
    comment TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

COMMIT;