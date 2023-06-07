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
    (1, 4, 'this song made me weep T.T'),
    (1, 5, 'This destroyed me in exquisite ways.'),
    (2, 2, 'i almost laughed?? poor effort'),
    (2, 4, 'my bf broke up w/ me :('),
    (3, 1, 'Not that great to cry to :|'),
    (3, 1, 'I barely cried at all')
     ON CONFLICT DO NOTHING;

COMMIT;