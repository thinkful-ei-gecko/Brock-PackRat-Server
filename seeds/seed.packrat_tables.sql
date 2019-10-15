BEGIN;

TRUNCATE
    packrat_users
    RESTART IDENTITY CASCADE;

INSERT INTO packrat_users (username, fullname, password)
VALUES
  ('brock', 'Brock Boutwell', 'password'),
  ('dunder', 'Dunder Mifflin', '$2a$12$i8noNqL0TIEhhG2DvYLnHenK84VRjd4SbyYNc/8m4KAf69gllJltC'),
  ('b.deboop', 'Bodeep Deboop', '$2a$12$L9ZfD/ee17g0qUS2XmdcRO//.2QZ4WnBvjzFASpIu3OiWBMPDgM.u'),
  ('c.bloggs', 'Charlie Bloggs', '$2a$12$9ufmBhF8aVrto36EHmQw8u6UltSOdlFKD4QcHDimObvXYNCBJvVlC'),
  ('s.smith', 'Sam Smith', '$2a$12$U3m.DO1IchNkoo7GQUI5I.p7wAjTcu6UfUQ/R8u9m.RxjJmsLhjAi'),
  ('lexlor', 'Alex Taylor', '$2a$12$o99AgfzQul/BivCRfHmWsOyxLp8mEoty3Svv5Ogpk5Ncl8Y6aYip2'),
  ('wippy', 'Ping Won In', '$2a$12$hzj9d8wX4snCK4g4AzHXaO2WmPCWHN6o75HDI69RFyb9tGSIznILS');

INSERT INTO packrat_collections (title)
VALUES
  ('Video Game Collection'),
  ('MTG Collection'),
  ('Pokemon TCG Collection'),
  ('Poster Collection'),
  ('Vehicle Collection'),
  ('Strategy Guide Collection');

INSERT INTO packrat_items ( title, year_released, info, collection_id )
VALUES
  ('Gears of War Epic Edition', 2011, 'Limited Edition Marcus Fenix Statue: A fine collectible PVC statue. The Art and Design of Gears of War by Tom Bissell: concepts to the final Act of Gears of War 3. Octus award box and Octus Service Medal. Adam Fenix multiplayer character and Infected Omen Weapon Pack: Custom multiplayer skins. Fenix family mementos and fabric COG flag.', 1),
  ('Skyrim Collectors Edition', 2012, 'Limited Edition Alduin Statue, The Art of Skyrim official artbook, The making of the ElderScrollsV DVD', 1),
  ('Black Louts', 1993, 'adds 3 mana of any single color of your choice to your mana pool', 2),
  ('Charizard', 1999, 'Fire Spin: Discard two energy cards attatched to Charizard in order to use this attack. 100', 3),
  ('Pikachu', 1995, 'Gnaw: 10', 3),
  ('Mewtwo', 1999, 'Psychic: it gone hurt boi i tell ya hwat', 3),
  ('Widespread Panic', 2014, 'Original Chuck Sperry holographic woodblock print', 4),
  ('Jeep Wrangler', 2004, 'The best damn vehicle ive ever owned', 5),
  ('Chrysler 200', 2011, 'its everything i hate about my Jeep', 5),
  ('Honda Accord', 1997, 'wish i still had it tbh', 5),
  ('Gears of War 2 Collectors Edition Strategy guide', 2015, 'Hardback, Perfect condition', 6);



  
COMMIT;

