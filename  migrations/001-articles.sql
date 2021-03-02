-- UP
CREATE TABLE User (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT
);

CREATE TABLE Article (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  content TEXT,
  ownerId INTEGER REFERENCES User(id)
);

INSERT INTO User (name, email) values ('Gabs', 'gabs@gabs.com');
INSERT INTO Article (title, content, ownerId) values ("Test Title", "Test Content", 1)

-- Down

DROP TABLE User;
DROP TABLE Article;