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

  COMMIT;