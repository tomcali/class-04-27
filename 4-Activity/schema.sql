CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('Finish consulting project.');
INSERT INTO wishes (wish) VALUES ('Grade papers.');
INSERT INTO wishes (wish) VALUES ('Clean the apartment.');
