BEGIN;

INSERT INTO
    songs (title, artist, url)
VALUES
    (
        'Cry Me A River',
        'Justin Timberlake',
        'https://open.spotify.com/track/7Lf7oSEVdzZqTA0kEDSlS5'
    ),
    (
        'Wash',
        'Bon Iver',
        'https://open.spotify.com/track/7rIhp6EWLNtM8qFIQruJPT'
    ),
    (
        'River',
        'Joni Mitchell',
        'https://open.spotify.com/track/0DAmSYQW9kq9gQNDI002KP'
    ) ON CONFLICT DO NOTHING;

INSERT INTO
    interactions (song_id, rating, comment)
VALUES
    (1, 4, 'trash'),
    (1, 3, 'amazballs'),
    (2, 2, 'white trash'),
    (2, 4, 'try again'),
    (3, 1, 'Not that great to cry to :|'),
    (3, 1, 'I barely cried at all')
     ON CONFLICT DO NOTHING;

COMMIT;