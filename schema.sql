DROP TABLE IF EXISTS Tasks;
CREATE TABLE IF NOT EXISTS Tasks (Id INTEGER PRIMARY KEY, Body TEXT);
INSERT INTO Tasks (Body) VALUES ("Take out the bins"), ("Clean my room");