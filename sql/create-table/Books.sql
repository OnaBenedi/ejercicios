CREATE TABLE Books(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(50),
  author VARCHAR(50),
  genre VARCHAR(20),
  published_year year,
  isbn VARCHAR(20),
  price DECIMAL(4,2),
  rating DECIMAL(1,1),
  stock_count INTEGER
  )