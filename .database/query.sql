-- routinely generating tables
CREATE TABLE events (
    date INT NOT NULL,
    month TEXT NOT NULL,
    eventtype TEXT NOT NULL,
    eventname TEXT NOT NULL
);

ALTER TABLE events ADD jumplink TEXT NOT NULL DEFAULT "[]";
ALTER TABLE events ADD details TEXT NOT NULL DEFAULT "[]";

-- jan
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (3, "january", "conjunction", "moon and venus in conjunction", "j1", "On 3 January, the waxing-crescent moon and Venus will be visible 3.26° apart to the West.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (4, "january", "meteor shower", "quadrantid meteor shower", "j2", "The Quadrantids meteor shower will reach its maximum activity on 3 to 4 January.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (4, "january", "conjunction", "moon and saturn in conjunction", "j3", "On 4 January, the waxing-crescent moon and Saturn will be visible 3.59° apart to the West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (5, "january", "perihelion", "perihelion", "j4", "On 5 January, the Earth will reach perihelion.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (5, "january", "occultation", "saturn lunar occultation", "j5", "On 5 January, Saturn will be occulted by the moon.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (6, "january", "occultation", "neptune lunar occultation", "j6", "On 6 January, Neptune will be occulted by the moon. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (8, "january", "perigee", "moon in perigee", "j7", "On 8 January, the moon will be in perigee; in its elliptical orbit.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (10, "january", "venus", "venus eastern elongation", "j8", "On 10 January, Venus will be at its Eastern elongation.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (12, "january", "venus", "venus dichotomy", "j9", "On 12 January, exactly half of the planet Venus will appear illuminated by the Sun.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (13, "january", "asteroid", "asteroid 887 alinda at opposition", "j10", "On 13 January, the asteroid 887 Alinda will be at opposition - it will reach the closest point to Earth in its orbit.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (13, "january", "comet", "Comet C/2024 G3 (ATLAS) passes perigee", "j11", "On 13 Jan, the comet C/2024 G3, otherwise known as ATLAS, will pass its perigee.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (13, "january", "full moon", "full moon", "j12", "The moon will be full on 13 January.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (14, "january", "conjunction", "moon and mars in conjunction", "j13", "On 14 January, the waxing-crescent moon and Mars will be visible 4.3° apart to the North-East. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (16, "january", "mars", "mars at opposition", "j14", "On 16 January, Mars will be at opposition - it will reach the closest point to Earth in its orbit.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (17, "january", "conjunction", "moon and mars in conjunction", "j15", "On 17 January, the waning-gibbous moon and Mars will be visible 2.22° apart to the North-West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (18, "january", "conjunction", "venus and saturn in conjunction", "j16", "On 18 January, Venus and Saturn will be visible 2.19° apart to the West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (19, "january", "meteor shower", "γ-ursae minorid meteor shower", "j17", "The γ-Ursae Minorid meteor shower will reach its maximum activity on 19 January.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (23, "january", "conjunction", "mars and pollux in conjunction", "j18", "On 23 January, the star Pollux of the constellation Gemini and Mars will be visible 2.36° apart to the North-West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (25, "january", "conjunction", "moon and antares in conjunction", "j19", "On 25 January, the waning-crescent moon and the star Antares of the constellation Scorpius will be visible 2.26° apart to the East. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (29, "january", "new moon", "new moon", "j20", "The moon will be new on 29 January.");

-- feb
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (1, "february", "conjunction", "moon and saturn in conjunction", "j21", "On 1 February, the waxing-crescent moon and Saturn will be visible 3.06° apart to the West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (10, "february", "conjunction", "moon and mars in conjunction", "j22", "On 10 February, the waxing-gibbous moon and Mars will be visible 3.22° apart to the North-West. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (12, "february", "full moon", "full moon", "j23", "The moon will be full on 12 February.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (13, "february", "asteroid", "asteroid 29 amphitrite at opposition", "j24", "On 13 February, the asteroid 29 Amphitrite will be at opposition - it will reach the closest point to Earth in its orbit. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (17, "february", "conjunction", "moon and spica in conjunction", "j25", "On 17 February, the waning-gibbous moon and the star Spica of Virgo will be visible only 0.24° apart to the East. ");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (18, "february", "apogee", "lunar apogee", "j26", "On 18 February, the moon will be in apogee; in its elliptical orbit, it will move further from Earth than at any other point during its cycle.");

-- test data!
    -- INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (18, "december", "yah", "yippee!", "[]", "[]");
    -- INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (19, "december", "asd", "a;askjlf", "[]", "[]");
    -- INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (19, "december", "nah", "awio", "[]", "[]");
-- INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (19, "december", "apogee", "lunar apogee", "[]", "On 19 December, the waning-crescent moon and the star Antares of the constellation Scorpius will be visible 2.26° apart to the East.");
-- INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (26, "december", "apogee", "lunar apogee", "[]", "On 19 December, the waning-crescent moon and the star Antares of the constellation Scorpius will be visible 2.26° apart to the East.");
INSERT INTO events (date, month, eventtype, eventname, jumplink, details) VALUES (30, "december", "apogee", "lunar apogee", "[]", "On 19 December, the waning-crescent moon and the star Antares of the constellation Scorpius will be visible 2.26° apart to the East.");

-- delete test data!
DELETE FROM events WHERE month="december";

-- clear table
DELETE FROM events;