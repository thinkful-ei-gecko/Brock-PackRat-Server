CREATE TABLE packrat_items (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  year_released INTEGER NOT NULL,
  info TEXT NOT NULL, 
  collection_id INTEGER
    REFERENCES packrat_collections(id) ON DELETE CASCADE NOT NULL
);