CREATE TABLE events (
    date INT NOT NULL,
    month TEXT NOT NULL,
    eventtype TEXT NOT NULL,
    eventname TEXT NOT NULL
);



INSERT INTO events (date, month, eventtype, eventname) VALUES (3, "january", "conjunction", "moon and venus in conjunction");
INSERT INTO events (date, month, eventtype, eventname) VALUES (4, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (4, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (5, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (5, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (6, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (8, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (10, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (12, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (13, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (13, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (14, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (16, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (17, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (18, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (19, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (23, "january", "conjunction", "moon and venus in conjunction");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (25, "january", "meteor shower", "quadrantid meteor shower");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (29, "january", "conjunction", "moon and venus in conjunction");

INSERT INTO events (date, month, eventtype, eventname) VALUES (1, "february", "meteor shower", "quadrantid meteor shower");
INSERT INTO events (date, month, eventtype, eventname) VALUES (10, "february", "conjunction", "moon and venus in conjunction");
INSERT INTO events (date, month, eventtype, eventname) VALUES (12, "february", "meteor shower", "quadrantid meteor shower");
INSERT INTO events (date, month, eventtype, eventname) VALUES (13, "february", "conjunction", "moon and venus in conjunction");
INSERT INTO events (date, month, eventtype, eventname) VALUES (17, "february", "meteor shower", "quadrantid meteor shower");
INSERT INTO events (date, month, eventtype, eventname) VALUES (18, "february", "conjunction", "moon and venus in conjunction");

INSERT INTO events (date, month, eventtype, eventname) VALUES (5, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");
-- INSERT INTO events (date, month, eventtype, eventname) VALUES (, "", "", "");

-- queries
SELECT * FROM events WHERE date LIKE "%moon%" OR month LIKE "%moon%" OR eventtype LIKE "%moon%" OR eventname LIKE "%moon%";