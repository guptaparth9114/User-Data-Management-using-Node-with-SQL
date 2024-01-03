CREATE TABLE user (
    id varchar(50) PRIMARY KEY,
    username varchar(45) unique,
    email varchar(91) unique not null,
    password varchar(55) NOT NULL
);