BEGIN;

INSERT INTO songs (id, title, artist, url)
VALUES
  (1, 'Cry Me A River', 'Justin Timberlake', 'https://open.spotify.com/track/7Lf7oSEVdzZqTA0kEDSlS5'),
  (2, 'Wash', 'Bon Iver', 'https://open.spotify.com/track/7rIhp6EWLNtM8qFIQruJPT'),
  (3, 'River', 'Joni Mitchell', 'https://open.spotify.com/track/0DAmSYQW9kq9gQNDI002KP')

ON CONFLICT DO NOTHING;

COMMIT;



